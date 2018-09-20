# Demo
[node server](http://spa-ssr-react.rdls.org:3012/)
[nginx server](http://spa-ssr-react.rdls.org:3015/)

# Load testing

## remote

```
siege -c50 -d5 -t60S -i -f siege-remote-nginx.txt --no-parser

Transactions:                   1119 hits
Availability:                 100.00 %
Elapsed time:                  59.13 secs
Data transferred:              43.65 MB
Response time:                  0.21 secs
Transaction rate:              18.92 trans/sec
Throughput:                     0.74 MB/sec
Concurrency:                    3.89
Successful transactions:        1119
Failed transactions:               0
Longest transaction:            1.30
Shortest transaction:           0.08
```

```
siege -c1 -d5 -t60S -i -f siege-remote-node.txt --no-parser

Transactions:                     28 hits
Availability:                 100.00 %
Elapsed time:                  59.39 secs
Data transferred:               1.03 MB
Response time:                  0.22 secs
Transaction rate:               0.47 trans/sec
Throughput:                     0.02 MB/sec
Concurrency:                    0.11
Successful transactions:          28
Failed transactions:               0
Longest transaction:            0.40
Shortest transaction:           0.15

siege -c50 -d5 -t60S -i -f siege-remote-node.txt --no-parser

Transactions:                   1026 hits
Availability:                 100.00 %
Elapsed time:                  59.78 secs
Data transferred:              40.70 MB
Response time:                  0.47 secs
Transaction rate:              17.16 trans/sec
Throughput:                     0.68 MB/sec
Concurrency:                    8.13
Successful transactions:        1026
Failed transactions:               0
Longest transaction:            2.83
Shortest transaction:           0.13
```

## dev

```bash
siege -c50 -d5 -t60S -i -f siege-nginx.txt --no-parser

Transactions:                   1215 hits
Availability:                 100.00 %
Elapsed time:                  59.47 secs
Data transferred:             393.29 MB
Response time:                  0.01 secs
Transaction rate:              20.43 trans/sec
Throughput:                     6.61 MB/sec
Concurrency:                    0.27
Successful transactions:        1215
Failed transactions:               0
Longest transaction:            0.25
Shortest transaction:           0.00
```

```bash
siege -c1 -d5 -t60S -i -f siege-node.txt --no-parser

Transactions:                     28 hits
Availability:                 100.00 %
Elapsed time:                  59.90 secs
Data transferred:               1.01 MB
Response time:                  0.06 secs
Transaction rate:               0.47 trans/sec
Throughput:                     0.02 MB/sec
Concurrency:                    0.03
Successful transactions:          28
Failed transactions:               0
Longest transaction:            0.63
Shortest transaction:           0.02

siege -c50 -d5 -t60S -i -f siege-node.txt --no-parser

Transactions:                   1141 hits
Availability:                 100.00 %
Elapsed time:                  59.58 secs
Data transferred:              44.91 MB
Response time:                  0.19 secs
Transaction rate:              19.15 trans/sec
Throughput:                     0.75 MB/sec
Concurrency:                    3.65
Successful transactions:        1141
Failed transactions:               0
Longest transaction:            2.34
Shortest transaction:           0.01
```

# Turn it on

## for development

```bash
yarn
yarn start
```

access on whatever port webpack-dev-server says its running on

## for demo

```bash
yarn
yarn build
docker-compose up
```

access nginx on port 3015 and node on 3012

ngnix checks file caches and proxies to node if it doesn't find anything

# Notes to myself...

## Stage 1 - Everything On The Fly

all processing done on server, including authentication.

complete page load is returned in initial request.

no javacript processing required after page load (except for like, mathjax).

## Stage 1.5 - Generic Responses for Generic Routes

some routes will behave like Stage 1 and some will behave like Stage 2
based on some configuration.

routes **requiring** authentication should behave like Stage 1 so that
unauthorized errors can be thrown correctly.

## Stage 2 - Generic Responses

least common denominator of logic is done on server per page load so that
the same response can be sent to anybody that requests the page. Responses
are cached to disk, subsequent renders will return the cached result.

no authentication processing on server.

some javascript processing required after page load to process
authentication.

server cannot return unauthorized errors, because it doesn't process
authentication.

## Stage 3 - Server Bypass

Nginx proxies incoming requests. if a cache file exists for the requested
route, it its returned by nginx. if a cache file doesn't exist
the request is forwarded to the server as described in Stage 2. a cache
file will then exist for subsequent requests to the same route (unless
the server elects not to create a cache file as it might if is is operating
as Stage 1.5).

## Stage 4 - There is no Server

All routes are pre-compiled and served by nginx or static site service (gh pages, s3).
