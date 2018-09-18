import styled from 'styled-components';

export default styled.div`
  margin: 0 auto;
  display: block;
  padding: 4rem 6rem 0 6rem;
  min-height: 6rem;
  counter-reset: figure;
  outline: none;

  ${props => props.baked && `
    .clearfix:before,
    .clearfix:after {
      content: " ";
      display: table;
    }
    .clearfix:after {
      clear: both;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #333333;
    }
    p {
      margin: 1rem 0 0;
      color: #555555;
    }
    p > [data-type="title"],
    p > .title {
      display: block;
      font-weight: bold;
    }
    a:not([role=button]) {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
    }
    pre {
      text-align: left;
    }
     > section:first-child,
     > figure:first-child,
     > p:first-child,
     > .abstract:first-child,
     > table:first-child {
      margin-top: 0 !important;
    }
    section > section,
    section > figure {
      margin-top: 3rem;
    }
     > figure,
    :not(figure) > figure {
      counter-increment: figure;
      counter-reset: subfigure;
    }
    figure {
      position: relative;
      color: #555555;
      text-align: center;
    }
    figure > figcaption {
      padding: 1rem;
      font-size: 1.3rem;
    }
    figure img {
      max-width: 100%;
    }
    figure > [data-type="media"],
    figure > .media {
      display: block;
      margin: 0;
      text-align: center;
    }
    figure > figure {
      counter-increment: subfigure;
    }
    figure > figure:not(.ui-has-child-figcaption)::after {
      position: relative;
      display: block;
      text-align: center;
      font-weight: bold;
    }
    figure:not([data-orient="vertical"]) {
      position: relative;
      display: table;
      top: 0;
      table-layout: fixed;
    }
    figure:not([data-orient="vertical"]) > [data-type="title"],
    figure:not([data-orient="vertical"]) > .title {
      font-weight: bold;
    }
    figure:not([data-orient="vertical"]) > figcaption {
      display: table-caption;
      caption-side: bottom;
      margin-bottom: 1.5rem;
    }
    figure:not([data-orient="vertical"]) > figure {
      display: table-cell;
    }
    figure:not([data-orient="vertical"]) > figure > figcaption {
      display: block;
    }
    [data-type="term"],
    .term {
      font-weight: bold;
    }
    .os-teacher {
      display: none;
    }
    [data-type="list"],
    .list {
      overflow-wrap: break-word;
    }
    [data-type="list"] > [data-type="title"],
    .list > [data-type="title"],
    [data-type="list"] > .title,
    .list > .title {
      font-weight: bold;
    }
    .footnote {
      font-size: 1rem;
    }
    .abstract {
      position: relative;
      background-color: #ededed;
      padding: 4.5rem 1.5rem 1.5rem 1.5rem;
      margin: 3rem 6rem 0 6rem;
    }
    .abstract ul {
      margin: 1.5rem 0 0 0;
    }
    .abstract ul::after {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: #555555;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      content: "Abstract";
    }
    [data-type="example"] [data-type="problem"],
    [data-type="exercise"] [data-type="problem"],
    .example [data-type="problem"],
    .exercise [data-type="problem"],
    [data-type="example"] [data-type="solution"],
    [data-type="exercise"] [data-type="solution"],
    .example [data-type="solution"],
    .exercise [data-type="solution"],
    [data-type="example"] .problem,
    [data-type="exercise"] .problem,
    .example .problem,
    .exercise .problem,
    [data-type="example"] .solution,
    [data-type="exercise"] .solution,
    .example .solution,
    .exercise .solution {
      padding: 0.5em 1em;
    }
    [data-type="example"] [data-type="solution"],
    [data-type="exercise"] [data-type="solution"],
    .example [data-type="solution"],
    .exercise [data-type="solution"],
    [data-type="example"] .solution,
    [data-type="exercise"] .solution,
    .example .solution,
    .exercise .solution {
      border-top: 0.1rem solid #555555;
    }
    [data-type="example"] [data-type="solution"] > .ui-toggle-wrapper,
    [data-type="exercise"] [data-type="solution"] > .ui-toggle-wrapper,
    .example [data-type="solution"] > .ui-toggle-wrapper,
    .exercise [data-type="solution"] > .ui-toggle-wrapper,
    [data-type="example"] .solution > .ui-toggle-wrapper,
    [data-type="exercise"] .solution > .ui-toggle-wrapper,
    .example .solution > .ui-toggle-wrapper,
    .exercise .solution > .ui-toggle-wrapper {
      text-align: center;
    }
    [data-type="example"] [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    [data-type="exercise"] [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    .example [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    .exercise [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    [data-type="example"] .solution > .ui-toggle-wrapper > .ui-toggle,
    [data-type="exercise"] .solution > .ui-toggle-wrapper > .ui-toggle,
    .example .solution > .ui-toggle-wrapper > .ui-toggle,
    .exercise .solution > .ui-toggle-wrapper > .ui-toggle {
      outline: 0;
      text-align: center;
      font-weight: bold;
    }
    [data-type="example"] [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .example [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="example"] .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .example .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before {
      content: '[Show Solution]';
    }
    [data-type="example"] [data-type="solution"]:not(.ui-solution-visible) > section,
    [data-type="exercise"] [data-type="solution"]:not(.ui-solution-visible) > section,
    .example [data-type="solution"]:not(.ui-solution-visible) > section,
    .exercise [data-type="solution"]:not(.ui-solution-visible) > section,
    [data-type="example"] .solution:not(.ui-solution-visible) > section,
    [data-type="exercise"] .solution:not(.ui-solution-visible) > section,
    .example .solution:not(.ui-solution-visible) > section,
    .exercise .solution:not(.ui-solution-visible) > section {
      display: none;
    }
    [data-type="example"] [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .example [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="example"] .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .example .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before {
      content: '[Hide Solution]';
    }
    [data-type="example"].check-understanding [data-type="title"]::before,
    [data-type="exercise"].check-understanding [data-type="title"]::before,
    .example.check-understanding [data-type="title"]::before,
    .exercise.check-understanding [data-type="title"]::before,
    [data-type="example"][data-type=check-understanding] .title::before,
    [data-type="exercise"][data-type=check-understanding] .title::before,
    .example[data-type=check-understanding] .title::before,
    .exercise[data-type=check-understanding] .title::before {
      margin-right: 0;
      content: "";
    }
    [data-type="example"].conceptual-questions [data-type="problem"],
    [data-type="exercise"].conceptual-questions [data-type="problem"],
    .example.conceptual-questions [data-type="problem"],
    .exercise.conceptual-questions [data-type="problem"],
    [data-type="example"][data-type=conceptual-questions] .problem,
    [data-type="exercise"][data-type=conceptual-questions] .problem,
    .example[data-type=conceptual-questions] .problem,
    .exercise[data-type=conceptual-questions] .problem {
      border-top: none;
    }
    [data-type="example"].conceptual-questions [data-type="problem"] p,
    [data-type="exercise"].conceptual-questions [data-type="problem"] p,
    .example.conceptual-questions [data-type="problem"] p,
    .exercise.conceptual-questions [data-type="problem"] p,
    [data-type="example"][data-type=conceptual-questions] .problem p,
    [data-type="exercise"][data-type=conceptual-questions] .problem p,
    .example[data-type=conceptual-questions] .problem p,
    .exercise[data-type=conceptual-questions] .problem p {
      margin: 0;
    }
    [data-type="example"].problems-exercises [data-type="problem"]::before,
    [data-type="exercise"].problems-exercises [data-type="problem"]::before,
    .example.problems-exercises [data-type="problem"]::before,
    .exercise.problems-exercises [data-type="problem"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="problem"]::before,
    .example[data-type=problems-exercises] [data-type="problem"]::before,
    .exercise[data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="example"].problems-exercises [data-type="solution"]::before,
    [data-type="exercise"].problems-exercises [data-type="solution"]::before,
    .example.problems-exercises [data-type="solution"]::before,
    .exercise.problems-exercises [data-type="solution"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="solution"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="solution"]::before,
    .example[data-type=problems-exercises] [data-type="solution"]::before,
    .exercise[data-type=problems-exercises] [data-type="solution"]::before,
    [data-type="example"].problems-exercises .problem::before,
    [data-type="exercise"].problems-exercises .problem::before,
    .example.problems-exercises .problem::before,
    .exercise.problems-exercises .problem::before,
    [data-type="example"][data-type=problems-exercises] .problem::before,
    [data-type="exercise"][data-type=problems-exercises] .problem::before,
    .example[data-type=problems-exercises] .problem::before,
    .exercise[data-type=problems-exercises] .problem::before,
    [data-type="example"].problems-exercises .solution::before,
    [data-type="exercise"].problems-exercises .solution::before,
    .example.problems-exercises .solution::before,
    .exercise.problems-exercises .solution::before,
    [data-type="example"][data-type=problems-exercises] .solution::before,
    [data-type="exercise"][data-type=problems-exercises] .solution::before,
    .example[data-type=problems-exercises] .solution::before,
    .exercise[data-type=problems-exercises] .solution::before {
      font-weight: bold;
      color: #555555;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    [data-type="example"].problems-exercises [data-type="problem"]::before,
    [data-type="exercise"].problems-exercises [data-type="problem"]::before,
    .example.problems-exercises [data-type="problem"]::before,
    .exercise.problems-exercises [data-type="problem"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="problem"]::before,
    .example[data-type=problems-exercises] [data-type="problem"]::before,
    .exercise[data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="example"].problems-exercises .problem::before,
    [data-type="exercise"].problems-exercises .problem::before,
    .example.problems-exercises .problem::before,
    .exercise.problems-exercises .problem::before,
    [data-type="example"][data-type=problems-exercises] .problem::before,
    [data-type="exercise"][data-type=problems-exercises] .problem::before,
    .example[data-type=problems-exercises] .problem::before,
    .exercise[data-type=problems-exercises] .problem::before {
      content: "Problem";
    }
    [data-type="example"].problems-exercises [data-type="solution"]::before .solution::before,
    [data-type="exercise"].problems-exercises [data-type="solution"]::before .solution::before,
    .example.problems-exercises [data-type="solution"]::before .solution::before,
    .exercise.problems-exercises [data-type="solution"]::before .solution::before,
    [data-type="example"][data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    .example[data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    .exercise[data-type=problems-exercises] [data-type="solution"]::before .solution::before {
      content: "Solution";
    }
    table {
      margin-top: 6rem;
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      counter-increment: table;
    }
    table caption {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      text-align: left;
      caption-side: bottom;
    }
    table caption sup {
      top: auto;
      line-height: inherit;
    }
    table caption > .title {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
    }
    table caption > .title::before {
      margin-right: 0.5rem;
      color: #606163;
      font-weight: bold;
      content: "Table " counter(table) ".";
    }
    table thead > tr > th,
    table tbody > tr > th,
    table tfoot > tr > th,
    table thead > tr > td,
    table tbody > tr > td,
    table tfoot > tr > td {
      padding: 1em;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 0.1rem solid #ddd;
    }
    table thead > tr > th,
    table thead > tr > td {
      vertical-align: bottom;
      border-bottom: 0.2rem solid #ddd;
      font-weight: bold;
      text-align: left;
    }
    table caption + thead tr:first-child th,
    table colgroup + thead tr:first-child th,
    table thead:first-child tr:first-child th,
    table caption + thead tr:first-child td,
    table colgroup + thead tr:first-child td,
    table thead:first-child tr:first-child td {
      border-top: 0;
    }
    table tbody + tbody {
      border-top: 0.2rem solid #ddd;
    }
    table table {
      background-color: #fff;
    }
    table > tbody > tr:nth-child(odd) > td,
    table > tbody > tr:nth-child(odd) > th {
      background-color: #f9f9f9;
    }
    [data-type="glossary"] [data-type="definition"] {
      margin: 1rem 3rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1.5rem 0 1rem 0;
      font-weight: bold;
    }
    h3 + section {
      margin-top: 0;
    }
    ul,
    ol {
      color: #555555;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    [data-bullet-style="none"] {
      list-style-type: none;
    }
    iframe {
      display: block;
      margin: 3rem auto;
      width: 100%;
    }
    .centered-text {
      display: block;
      text-align: center;
      font-weight: normal;
    }
    .os-chapter-outline ul {
      margin-top: 0;
    }
    .no-emphasis {
      font-weight: normal;
    }
    [data-type="page"] > [data-type="document-title"],
    [data-type="composite-page"] > [data-type="document-title"] {
      display: none;
    }
     > section,
     > figure,
     > [data-type="glossary"],
     > [data-type="footnote-refs"] {
      margin-top: 6rem;
    }
     > section > ol > li::before,
     > figure > ol > li::before,
     > [data-type="glossary"] > ol > li::before,
     > [data-type="footnote-refs"] > ol > li::before {
      content: "" !important;
    }
    .splash {
      margin-top: 0;
    }
    .splash:not([data-orient="vertical"]) {
      display: block;
    }
    .splash:not([data-orient="vertical"]) img {
      width: 100%;
    }
    .os-figure {
      display: table;
      margin: 3rem auto;
    }
    .os-figure .os-caption-container {
      padding-top: 1rem;
      display: table-caption;
      caption-side: bottom;
      font-size: 1.2rem;
      color: #555555;
    }
    .os-figure .os-caption-container .os-title-label {
      font-weight: bold;
    }
    .os-figure .os-caption-container .os-number {
      font-weight: bold;
    }
    .os-figure .os-caption-container .os-title {
      font-weight: bold;
    }
    h1.example-title .text {
      padding-left: 1rem;
    }
    [data-type="note"],
    .note {
      margin: 3rem 6rem 0 6rem;
      margin: 3rem 0;
      padding: 1.5rem;
      background-color: #ededed;
      border: 0.2rem solid gainsboro;
    }
    @media (max-width: 767px) {
      [data-type="note"],
      .note {
        margin-left: 0;
        margin-right: 0;
      }
    }
    [data-type="note"] > p,
    .note > p {
      margin-top: 0;
    }
    [data-type="note"]:not([data-label]).ui-has-child-title > header > [data-type="title"],
    .note:not([data-label]).ui-has-child-title > header > [data-type="title"],
    [data-type="note"]:not([data-label]).ui-has-child-title > [data-type="title"],
    .note:not([data-label]).ui-has-child-title > [data-type="title"],
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .title,
    .note:not([data-label]).ui-has-child-title > header > .title,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .os-title,
    .note:not([data-label]).ui-has-child-title > header > .os-title,
    [data-type="note"]:not([data-label]).ui-has-child-title > .title,
    .note:not([data-label]).ui-has-child-title > .title,
    [data-type="note"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"],
    .note:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="note"]:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    .note:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    .note:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .title::before,
    .note:not([data-label]).ui-has-child-title > header > .title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .os-title::before,
    .note:not([data-label]).ui-has-child-title > header > .os-title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > .title::before,
    .note:not([data-label]).ui-has-child-title > .title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"][data-label=''].ui-has-child-title > header > [data-type="title"],
    .note[data-label=''].ui-has-child-title > header > [data-type="title"],
    [data-type="note"][data-label=''].ui-has-child-title > [data-type="title"],
    .note[data-label=''].ui-has-child-title > [data-type="title"],
    [data-type="note"][data-label=''].ui-has-child-title > header > .title,
    .note[data-label=''].ui-has-child-title > header > .title,
    [data-type="note"][data-label=''].ui-has-child-title > header > .os-title,
    .note[data-label=''].ui-has-child-title > header > .os-title,
    [data-type="note"][data-label=''].ui-has-child-title > .title,
    .note[data-label=''].ui-has-child-title > .title,
    [data-type="note"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"],
    .note[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="note"][data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    .note[data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"][data-label=''].ui-has-child-title > [data-type="title"]::before,
    .note[data-label=''].ui-has-child-title > [data-type="title"]::before,
    [data-type="note"][data-label=''].ui-has-child-title > header > .title::before,
    .note[data-label=''].ui-has-child-title > header > .title::before,
    [data-type="note"][data-label=''].ui-has-child-title > header > .os-title::before,
    .note[data-label=''].ui-has-child-title > header > .os-title::before,
    [data-type="note"][data-label=''].ui-has-child-title > .title::before,
    .note[data-label=''].ui-has-child-title > .title::before,
    [data-type="note"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    .note[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    .note[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .title,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > .title,
    .note[data-label]:not([data-label='']).ui-has-child-title > .title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"],
    .note[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > .title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > .title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"] > section,
    .note > section {
      padding: 0.5rem 1.5rem;
      border-top: 0.1rem solid #555555;
      border-top: none;
      padding: 0rem 1.5rem;
      background-color: #ededed;
      color: #555555;
    }
    [data-type="note"] > section p,
    .note > section p {
      margin: 0 0 1rem;
    }
    [data-type="note"] > section ul,
    .note > section ul,
    [data-type="note"] > section ol,
    .note > section ol {
      color: #555555;
    }
    [data-type="note"] > section span[data-type="media"],
    .note > section span[data-type="media"] {
      display: block;
      margin: 1rem 0;
    }
    [data-type="example"],
    .example {
      margin: 3rem 0;
      padding: 1.5rem;
      background-color: #ededed;
      border: 0.2rem solid gainsboro;
    }
    [data-type="example"] > p,
    .example > p {
      margin-top: 0;
    }
    [data-type="example"]:not([data-label]).ui-has-child-title > header > [data-type="title"],
    .example:not([data-label]).ui-has-child-title > header > [data-type="title"],
    [data-type="example"]:not([data-label]).ui-has-child-title > [data-type="title"],
    .example:not([data-label]).ui-has-child-title > [data-type="title"],
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .title,
    .example:not([data-label]).ui-has-child-title > header > .title,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .os-title,
    .example:not([data-label]).ui-has-child-title > header > .os-title,
    [data-type="example"]:not([data-label]).ui-has-child-title > .title,
    .example:not([data-label]).ui-has-child-title > .title,
    [data-type="example"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"],
    .example:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="example"]:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    .example:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    .example:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .title::before,
    .example:not([data-label]).ui-has-child-title > header > .title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .os-title::before,
    .example:not([data-label]).ui-has-child-title > header > .os-title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > .title::before,
    .example:not([data-label]).ui-has-child-title > .title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"][data-label=''].ui-has-child-title > header > [data-type="title"],
    .example[data-label=''].ui-has-child-title > header > [data-type="title"],
    [data-type="example"][data-label=''].ui-has-child-title > [data-type="title"],
    .example[data-label=''].ui-has-child-title > [data-type="title"],
    [data-type="example"][data-label=''].ui-has-child-title > header > .title,
    .example[data-label=''].ui-has-child-title > header > .title,
    [data-type="example"][data-label=''].ui-has-child-title > header > .os-title,
    .example[data-label=''].ui-has-child-title > header > .os-title,
    [data-type="example"][data-label=''].ui-has-child-title > .title,
    .example[data-label=''].ui-has-child-title > .title,
    [data-type="example"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"],
    .example[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="example"][data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    .example[data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"][data-label=''].ui-has-child-title > [data-type="title"]::before,
    .example[data-label=''].ui-has-child-title > [data-type="title"]::before,
    [data-type="example"][data-label=''].ui-has-child-title > header > .title::before,
    .example[data-label=''].ui-has-child-title > header > .title::before,
    [data-type="example"][data-label=''].ui-has-child-title > header > .os-title::before,
    .example[data-label=''].ui-has-child-title > header > .os-title::before,
    [data-type="example"][data-label=''].ui-has-child-title > .title::before,
    .example[data-label=''].ui-has-child-title > .title::before,
    [data-type="example"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    .example[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    .example[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .title,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > .title,
    .example[data-label]:not([data-label='']).ui-has-child-title > .title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"],
    .example[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      display: block;
      margin-bottom: 1rem;
      margin-top: 0;
      padding: 0rem 1.5rem 1rem 1.5rem;
      border-bottom: 0.2rem solid gainsboro;
    }
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > .title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > .title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"] > section,
    .example > section {
      padding: 0.5rem 1.5rem;
      border-top: 0.1rem solid #555555;
      border-top: none;
      padding: 0rem 1.5rem;
      background-color: #ededed;
      color: #555555;
    }
    [data-type="example"] > section p,
    .example > section p {
      margin: 0 0 1rem;
    }
    [data-type="example"] > section ul,
    .example > section ul,
    [data-type="example"] > section ol,
    .example > section ol {
      color: #555555;
    }
    [data-type="example"] > section span[data-type="media"],
    .example > section span[data-type="media"] {
      display: block;
      margin: 1rem 0;
    }
    [data-type="problem"],
    [data-type="solution"],
    .problem,
    .solution {
      padding: 0;
    }
    .os-eoc .os-problem-container,
    .os-eob .os-problem-container,
    .os-eoc .os-solution-container,
    .os-eob .os-solution-container {
      display: inline;
    }
    .os-eoc .os-problem-container > :first-child:not(ul):not(ol):not([data-type="note"]),
    .os-eob .os-problem-container > :first-child:not(ul):not(ol):not([data-type="note"]),
    .os-eoc .os-solution-container > :first-child:not(ul):not(ol):not([data-type="note"]),
    .os-eob .os-solution-container > :first-child:not(ul):not(ol):not([data-type="note"]) {
      display: inline;
    }
    .os-eoc .os-problem-container > ul,
    .os-eob .os-problem-container > ul,
    .os-eoc .os-solution-container > ul,
    .os-eob .os-solution-container > ul,
    .os-eoc .os-problem-container > ol,
    .os-eob .os-problem-container > ol,
    .os-eoc .os-solution-container > ol,
    .os-eob .os-solution-container > ol,
    .os-eoc .os-problem-container [data-type="note"],
    .os-eob .os-problem-container [data-type="note"],
    .os-eoc .os-solution-container [data-type="note"],
    .os-eob .os-solution-container [data-type="note"] {
      margin-top: 0;
    }
    [data-type="note"] [data-type="solution"],
    [data-type="exercise"] [data-type="solution"],
    [data-type="example"] [data-type="solution"],
    [data-type="note"] .solution,
    [data-type="exercise"] .solution,
    [data-type="example"] .solution {
      border-top: 0.1rem solid gainsboro;
    }
    [data-type="note"] [data-type="solution"] section p,
    [data-type="exercise"] [data-type="solution"] section p,
    [data-type="example"] [data-type="solution"] section p,
    [data-type="note"] .solution section p,
    [data-type="exercise"] .solution section p,
    [data-type="example"] .solution section p,
    [data-type="note"] [data-type="solution"] section ul,
    [data-type="exercise"] [data-type="solution"] section ul,
    [data-type="example"] [data-type="solution"] section ul,
    [data-type="note"] .solution section ul,
    [data-type="exercise"] .solution section ul,
    [data-type="example"] .solution section ul,
    [data-type="note"] [data-type="solution"] section ol,
    [data-type="exercise"] [data-type="solution"] section ol,
    [data-type="example"] [data-type="solution"] section ol,
    [data-type="note"] .solution section ol,
    [data-type="exercise"] .solution section ol,
    [data-type="example"] .solution section ol,
    [data-type="note"] [data-type="solution"] section .os-table,
    [data-type="exercise"] [data-type="solution"] section .os-table,
    [data-type="example"] [data-type="solution"] section .os-table,
    [data-type="note"] .solution section .os-table,
    [data-type="exercise"] .solution section .os-table,
    [data-type="example"] .solution section .os-table {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .equation,
    [data-type="equation"] {
      display: table;
      width: 100%;
    }
    .equation .os-equation-number,
    [data-type="equation"] .os-equation-number {
      display: table-cell;
      vertical-align: middle;
      width: 5%;
    }
    .equation .os-equation-number .os-number,
    [data-type="equation"] .os-equation-number .os-number {
      border: black solid 1px;
      padding: 5px;
      text-align: center;
      vertical-align: middle;
    }
    .equation [data-type="title"],
    [data-type="equation"] [data-type="title"] {
      display: block;
      text-align: center;
      font-weight: bold;
    }
    .os-note-body img {
      display: block;
    }
    .os-table table thead tr th .MathJax_Display {
      width: auto !important;
      float: left !important;
      margin: 0px;
    }
    .swipe-table {
      -webkit-touch-callout: none;
      /* iOS Safari */
      -webkit-user-select: none;
      /* Safari */
      -khtml-user-select: none;
      /* Konqueror HTML */
      -moz-user-select: none;
      /* Firefox */
      -ms-user-select: none;
      /* Internet Explorer/Edge */
      user-select: none;
      /* Chrome / Opera */
      cursor: -webkit-grab;
    }
    .os-table {
      overflow-x: auto;
      margin: 20px 0;
    }
    .os-table .os-table-title {
      text-align: center;
      font-weight: bold;
      padding-bottom: 1em;
    }
    .os-table table {
      margin: 0;
    }
    .os-table table tr td {
      vertical-align: middle;
      padding: 1em;
    }
    .os-table table ul,
    .os-table table ol {
      padding-left: 1.5em;
    }
    .os-table table ul[data-bullet-style="none"],
    .os-table table ol[data-bullet-style="none"] {
      padding: 0;
      margin: 0;
    }
    .os-table table ul[data-bullet-style="none"] li,
    .os-table table ol[data-bullet-style="none"] li {
      list-style: none;
    }
    .os-table table .os-figure {
      margin: 0;
    }
    .os-table table .os-figure img {
      margin: 0;
    }
    .os-table table .os-figure .os-caption-container {
      padding: 1rem 0 0 0;
    }
    .os-table .os-caption-container {
      font-size: 0.9em;
      padding: 8px;
      border-top: 0.1rem solid gainsboro;
    }
    .os-table .os-caption-container .os-title-label,
    .os-table .os-caption-container .os-number {
      font-weight: bold;
      display: inline-block;
      padding-right: 0.25em;
    }
    .os-eoc h2[data-type="document-title"],
    .os-eob h2[data-type="document-title"],
    .os-eoc h2.os-title,
    .os-eob h2.os-title {
      font-size: 2.1rem;
      font-weight: bold;
    }
    .os-eoc .os-number,
    .os-eob .os-number {
      padding-right: 4px;
      font-weight: bold;
      text-decoration: none;
    }
    .os-eoc .os-number:not(:only-child),
    .os-eob .os-number:not(:only-child) {
      padding: 0;
    }
    .os-eoc .group-by .os-index-item:not(:first-of-type),
    .os-eob .group-by .os-index-item:not(:first-of-type) {
      margin-top: 0.5rem;
    }
    .os-eoc .group-by .os-index-item .os-term,
    .os-eob .group-by .os-index-item .os-term {
      font-weight: bold;
      padding-right: 0.5rem;
    }
    .os-eoc .group-label,
    .os-eob .group-label {
      display: block;
      font-size: 2.1rem;
      font-weight: bold;
      margin: 1.5rem 0 1rem 0;
    }
    .os-eoc.os-reference-container > .os-chapter-area > .reference span.os-reference-number,
    .os-eob.os-reference-container > .os-chapter-area > .reference span.os-reference-number,
    .os-eoc.os-references-container .references .os-note-body > a,
    .os-eob.os-references-container .references .os-note-body > a {
      margin-right: 10px;
    }
    .os-eoc [data-type="list"] > [data-type="title"],
    .os-eob [data-type="list"] > [data-type="title"],
    .os-eoc .list > [data-type="title"],
    .os-eob .list > [data-type="title"],
    .os-eoc [data-type="list"] > .title,
    .os-eob [data-type="list"] > .title,
    .os-eoc .list > .title,
    .os-eob .list > .title {
      margin-top: 15px;
    }
    .os-eoc [data-type="exercise"] [data-type="problem"] > .number,
    .os-eoc .exercise [data-type="problem"] > .number {
      font-weight: bold;
      text-decoration: none;
    }
    .os-eoc [data-type="exercise"] img,
    .os-eoc .exercise img {
      display: block;
      margin-bottom: 1em;
    }
    .os-solutions-container [data-type="solution"] {
      padding: 0.5em 0.25em 0.5em 0;
    }
    .os-solutions-container [data-type="solution"] > a {
      font-weight: bold;
      text-decoration: none;
    }
    .os-solutions-container [data-type="solution"] p {
      display: inline;
    }
    .os-solutions-container [data-type="solution"] p::before {
      content: " ";
    }
    .os-chapter-area [data-type="solution"] p {
      display: inline;
    }
    .appendix [data-type="list"] {
      margin-top: 1rem;
    }
    figure.scaled-down {
      width: 60%;
      margin: auto;
    }
    figure.scaled-down ~ .os-caption-container {
      width: 60%;
      margin: auto;
    }
    :not(figure) > [data-type="media"].scaled-down {
      text-align: center;
      display: block;
    }
    :not(figure) > [data-type="media"].scaled-down img {
      width: 60%;
    }
  `}
  ${props => !props.baked && `
    .clearfix:before,
    .clearfix:after {
      content: " ";
      display: table;
    }
    .clearfix:after {
      clear: both;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #333333;
    }
    p {
      margin: 1rem 0 0;
      color: #555555;
    }
    p > [data-type="title"],
    p > .title {
      display: block;
      font-weight: bold;
    }
    a:not([role=button]) {
      text-decoration: underline;
    }
    img {
      max-width: 100%;
    }
    pre {
      text-align: left;
    }
     > section:first-child,
     > figure:first-child,
     > p:first-child,
     > .abstract:first-child,
     > table:first-child {
      margin-top: 0 !important;
    }
    section > section,
    section > figure {
      margin-top: 3rem;
    }
     > figure,
    :not(figure) > figure {
      counter-increment: figure;
      counter-reset: subfigure;
    }
    figure {
      position: relative;
      color: #555555;
      text-align: center;
    }
    figure > figcaption {
      padding: 1rem;
      font-size: 1.3rem;
    }
    figure img {
      max-width: 100%;
    }
    figure > [data-type="media"],
    figure > .media {
      display: block;
      margin: 0;
      text-align: center;
    }
    figure > figure {
      counter-increment: subfigure;
    }
    figure > figure:not(.ui-has-child-figcaption)::after {
      position: relative;
      display: block;
      text-align: center;
      font-weight: bold;
    }
    figure:not([data-orient="vertical"]) {
      position: relative;
      display: table;
      top: 0;
      table-layout: fixed;
    }
    figure:not([data-orient="vertical"]) > [data-type="title"],
    figure:not([data-orient="vertical"]) > .title {
      font-weight: bold;
    }
    figure:not([data-orient="vertical"]) > figcaption {
      display: table-caption;
      caption-side: bottom;
      margin-bottom: 1.5rem;
    }
    figure:not([data-orient="vertical"]) > figure {
      display: table-cell;
    }
    figure:not([data-orient="vertical"]) > figure > figcaption {
      display: block;
    }
    [data-type="term"],
    .term {
      font-weight: bold;
    }
    .os-teacher {
      display: none;
    }
    [data-type="list"],
    .list {
      overflow-wrap: break-word;
    }
    [data-type="list"] > [data-type="title"],
    .list > [data-type="title"],
    [data-type="list"] > .title,
    .list > .title {
      font-weight: bold;
    }
    .footnote {
      font-size: 1rem;
    }
    .abstract {
      position: relative;
      background-color: #ededed;
      padding: 4.5rem 1.5rem 1.5rem 1.5rem;
      margin: 3rem 6rem 0 6rem;
    }
    .abstract ul {
      margin: 1.5rem 0 0 0;
    }
    .abstract ul::after {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: #555555;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      content: "Abstract";
    }
    [data-type="example"] [data-type="problem"],
    [data-type="exercise"] [data-type="problem"],
    .example [data-type="problem"],
    .exercise [data-type="problem"],
    [data-type="example"] [data-type="solution"],
    [data-type="exercise"] [data-type="solution"],
    .example [data-type="solution"],
    .exercise [data-type="solution"],
    [data-type="example"] .problem,
    [data-type="exercise"] .problem,
    .example .problem,
    .exercise .problem,
    [data-type="example"] .solution,
    [data-type="exercise"] .solution,
    .example .solution,
    .exercise .solution {
      padding: 0.5em 1em;
    }
    [data-type="example"] [data-type="solution"],
    [data-type="exercise"] [data-type="solution"],
    .example [data-type="solution"],
    .exercise [data-type="solution"],
    [data-type="example"] .solution,
    [data-type="exercise"] .solution,
    .example .solution,
    .exercise .solution {
      border-top: 0.1rem solid #555555;
    }
    [data-type="example"] [data-type="solution"] > .ui-toggle-wrapper,
    [data-type="exercise"] [data-type="solution"] > .ui-toggle-wrapper,
    .example [data-type="solution"] > .ui-toggle-wrapper,
    .exercise [data-type="solution"] > .ui-toggle-wrapper,
    [data-type="example"] .solution > .ui-toggle-wrapper,
    [data-type="exercise"] .solution > .ui-toggle-wrapper,
    .example .solution > .ui-toggle-wrapper,
    .exercise .solution > .ui-toggle-wrapper {
      text-align: center;
    }
    [data-type="example"] [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    [data-type="exercise"] [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    .example [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    .exercise [data-type="solution"] > .ui-toggle-wrapper > .ui-toggle,
    [data-type="example"] .solution > .ui-toggle-wrapper > .ui-toggle,
    [data-type="exercise"] .solution > .ui-toggle-wrapper > .ui-toggle,
    .example .solution > .ui-toggle-wrapper > .ui-toggle,
    .exercise .solution > .ui-toggle-wrapper > .ui-toggle {
      outline: 0;
      text-align: center;
      font-weight: bold;
    }
    [data-type="example"] [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .example [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise [data-type="solution"]:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="example"] .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .example .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise .solution:not(.ui-solution-visible) > .ui-toggle-wrapper > button.ui-toggle::before {
      content: '[Show Solution]';
    }
    [data-type="example"] [data-type="solution"]:not(.ui-solution-visible) > section,
    [data-type="exercise"] [data-type="solution"]:not(.ui-solution-visible) > section,
    .example [data-type="solution"]:not(.ui-solution-visible) > section,
    .exercise [data-type="solution"]:not(.ui-solution-visible) > section,
    [data-type="example"] .solution:not(.ui-solution-visible) > section,
    [data-type="exercise"] .solution:not(.ui-solution-visible) > section,
    .example .solution:not(.ui-solution-visible) > section,
    .exercise .solution:not(.ui-solution-visible) > section {
      display: none;
    }
    [data-type="example"] [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .example [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise [data-type="solution"].ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="example"] .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    [data-type="exercise"] .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .example .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before,
    .exercise .solution.ui-solution-visible > .ui-toggle-wrapper > button.ui-toggle::before {
      content: '[Hide Solution]';
    }
    [data-type="example"].check-understanding [data-type="title"]::before,
    [data-type="exercise"].check-understanding [data-type="title"]::before,
    .example.check-understanding [data-type="title"]::before,
    .exercise.check-understanding [data-type="title"]::before,
    [data-type="example"][data-type=check-understanding] .title::before,
    [data-type="exercise"][data-type=check-understanding] .title::before,
    .example[data-type=check-understanding] .title::before,
    .exercise[data-type=check-understanding] .title::before {
      margin-right: 0;
      content: "";
    }
    [data-type="example"].conceptual-questions [data-type="problem"],
    [data-type="exercise"].conceptual-questions [data-type="problem"],
    .example.conceptual-questions [data-type="problem"],
    .exercise.conceptual-questions [data-type="problem"],
    [data-type="example"][data-type=conceptual-questions] .problem,
    [data-type="exercise"][data-type=conceptual-questions] .problem,
    .example[data-type=conceptual-questions] .problem,
    .exercise[data-type=conceptual-questions] .problem {
      border-top: none;
    }
    [data-type="example"].conceptual-questions [data-type="problem"] p,
    [data-type="exercise"].conceptual-questions [data-type="problem"] p,
    .example.conceptual-questions [data-type="problem"] p,
    .exercise.conceptual-questions [data-type="problem"] p,
    [data-type="example"][data-type=conceptual-questions] .problem p,
    [data-type="exercise"][data-type=conceptual-questions] .problem p,
    .example[data-type=conceptual-questions] .problem p,
    .exercise[data-type=conceptual-questions] .problem p {
      margin: 0;
    }
    [data-type="example"].problems-exercises [data-type="problem"]::before,
    [data-type="exercise"].problems-exercises [data-type="problem"]::before,
    .example.problems-exercises [data-type="problem"]::before,
    .exercise.problems-exercises [data-type="problem"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="problem"]::before,
    .example[data-type=problems-exercises] [data-type="problem"]::before,
    .exercise[data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="example"].problems-exercises [data-type="solution"]::before,
    [data-type="exercise"].problems-exercises [data-type="solution"]::before,
    .example.problems-exercises [data-type="solution"]::before,
    .exercise.problems-exercises [data-type="solution"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="solution"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="solution"]::before,
    .example[data-type=problems-exercises] [data-type="solution"]::before,
    .exercise[data-type=problems-exercises] [data-type="solution"]::before,
    [data-type="example"].problems-exercises .problem::before,
    [data-type="exercise"].problems-exercises .problem::before,
    .example.problems-exercises .problem::before,
    .exercise.problems-exercises .problem::before,
    [data-type="example"][data-type=problems-exercises] .problem::before,
    [data-type="exercise"][data-type=problems-exercises] .problem::before,
    .example[data-type=problems-exercises] .problem::before,
    .exercise[data-type=problems-exercises] .problem::before,
    [data-type="example"].problems-exercises .solution::before,
    [data-type="exercise"].problems-exercises .solution::before,
    .example.problems-exercises .solution::before,
    .exercise.problems-exercises .solution::before,
    [data-type="example"][data-type=problems-exercises] .solution::before,
    [data-type="exercise"][data-type=problems-exercises] .solution::before,
    .example[data-type=problems-exercises] .solution::before,
    .exercise[data-type=problems-exercises] .solution::before {
      font-weight: bold;
      color: #555555;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    [data-type="example"].problems-exercises [data-type="problem"]::before,
    [data-type="exercise"].problems-exercises [data-type="problem"]::before,
    .example.problems-exercises [data-type="problem"]::before,
    .exercise.problems-exercises [data-type="problem"]::before,
    [data-type="example"][data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="problem"]::before,
    .example[data-type=problems-exercises] [data-type="problem"]::before,
    .exercise[data-type=problems-exercises] [data-type="problem"]::before,
    [data-type="example"].problems-exercises .problem::before,
    [data-type="exercise"].problems-exercises .problem::before,
    .example.problems-exercises .problem::before,
    .exercise.problems-exercises .problem::before,
    [data-type="example"][data-type=problems-exercises] .problem::before,
    [data-type="exercise"][data-type=problems-exercises] .problem::before,
    .example[data-type=problems-exercises] .problem::before,
    .exercise[data-type=problems-exercises] .problem::before {
      content: "Problem";
    }
    [data-type="example"].problems-exercises [data-type="solution"]::before .solution::before,
    [data-type="exercise"].problems-exercises [data-type="solution"]::before .solution::before,
    .example.problems-exercises [data-type="solution"]::before .solution::before,
    .exercise.problems-exercises [data-type="solution"]::before .solution::before,
    [data-type="example"][data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    [data-type="exercise"][data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    .example[data-type=problems-exercises] [data-type="solution"]::before .solution::before,
    .exercise[data-type=problems-exercises] [data-type="solution"]::before .solution::before {
      content: "Solution";
    }
    table {
      margin-top: 6rem;
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      background-color: transparent;
      counter-increment: table;
    }
    table caption {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      text-align: left;
      caption-side: bottom;
    }
    table caption sup {
      top: auto;
      line-height: inherit;
    }
    table caption > .title {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
    }
    table caption > .title::before {
      margin-right: 0.5rem;
      color: #606163;
      font-weight: bold;
      content: "Table " counter(table) ".";
    }
    table thead > tr > th,
    table tbody > tr > th,
    table tfoot > tr > th,
    table thead > tr > td,
    table tbody > tr > td,
    table tfoot > tr > td {
      padding: 1em;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 0.1rem solid #ddd;
    }
    table thead > tr > th,
    table thead > tr > td {
      vertical-align: bottom;
      border-bottom: 0.2rem solid #ddd;
      font-weight: bold;
      text-align: left;
    }
    table caption + thead tr:first-child th,
    table colgroup + thead tr:first-child th,
    table thead:first-child tr:first-child th,
    table caption + thead tr:first-child td,
    table colgroup + thead tr:first-child td,
    table thead:first-child tr:first-child td {
      border-top: 0;
    }
    table tbody + tbody {
      border-top: 0.2rem solid #ddd;
    }
    table table {
      background-color: #fff;
    }
    table > tbody > tr:nth-child(odd) > td,
    table > tbody > tr:nth-child(odd) > th {
      background-color: #f9f9f9;
    }
    [data-type="glossary"] [data-type="definition"] {
      margin: 1rem 3rem;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1.5rem;
    }
     > section,
     > figure,
     > [data-type="glossary"],
     > [data-type="footnote-refs"] {
      margin-top: 6rem;
    }
     > section > ol,
     > figure > ol,
     > [data-type="glossary"] > ol,
     > [data-type="footnote-refs"] > ol {
      list-style-type: none;
    }
    figure.ui-has-child-figcaption > figcaption::before,
    figure:not(.ui-has-child-figcaption)::after {
      margin-right: 0.5rem;
      color: #606163;
      font-weight: bold;
      content: "Figure " counter(figure) ".";
    }
    figure > figure.ui-has-child-figcaption > figcaption::before {
      font-weight: bold;
      content: counter(figure) counter(subfigure, lower-alpha) ': ';
    }
    figure > figure:not(.ui-has-child-figcaption)::after {
      content: '(' counter(subfigure, lower-alpha) ')';
    }
    figure:not([data-orient="vertical"]) {
      width: 100%;
    }
    ul:not([data-display='inline'])[data-bullet-style="pilcrow"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="pilcrow"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="pilcrow"] > li::before {
      content: '\00b6';
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="rpilcrow"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="rpilcrow"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="rpilcrow"] > li::before {
      content: '\\204b';
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="section"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="section"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="section"] > li::before {
      content: '\\00a7';
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="asterisk"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="asterisk"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="asterisk"] > li::before {
      content: '*';
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="dash"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="dash"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="dash"] > li::before {
      content: '-';
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="none"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style="none"] > [data-type="item"]::before,
    ul:not([data-display='inline'])[data-bullet-style="none"] > li::before {
      content: none;
      margin-right: 0.5em;
    }
    ul:not([data-display='inline'])[data-bullet-style="none"] {
      list-style-type: none;
    }
    ul:not([data-display='inline'])[data-bullet-style]:not([data-bullet-style='bullet']):not([data-bullet-style='open-circle']):not([data-bullet-style='pilcrow']):not([data-bullet-style='rpilcrow']):not([data-bullet-style='section']):not([data-bullet-style='asterisk']):not([data-bullet-style='dash']):not([data-bullet-style='none'])::before {
      content: '[' 'data-bullet-style=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    ul:not([data-display='inline'])[data-bullet-style="bullet"] {
      list-style-type: disc;
    }
    ul:not([data-display='inline'])[data-bullet-style="open-circle"] {
      list-style-type: circle;
    }
    ol:not([data-display='inline'])[data-number-style="arabic"] {
      list-style-type: decimal;
    }
    ol:not([data-display='inline'])[data-number-style="upper-alpha"] {
      list-style-type: upper-alpha;
    }
    ol:not([data-display='inline'])[data-number-style="lower-alpha"] {
      list-style-type: lower-alpha;
    }
    ol:not([data-display='inline'])[data-number-style="upper-roman"] {
      list-style-type: upper-roman;
    }
    ol:not([data-display='inline'])[data-number-style="lower-roman"] {
      list-style-type: lower-roman;
    }
    ul[data-labeled-item] {
      list-style-type: none;
    }
    ul[data-display='inline'] {
      display: inline;
      list-style-type: none;
    }
    ul[data-display='inline'][data-bullet-style="pilcrow"] > li::before,
    ul[data-display='inline'][data-bullet-style="pilcrow"] > [data-type="item"]::before {
      content: '\\00b6';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="rpilcrow"] > li::before,
    ul[data-display='inline'][data-bullet-style="rpilcrow"] > [data-type="item"]::before {
      content: '\\204b';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="section"] > li::before,
    ul[data-display='inline'][data-bullet-style="section"] > [data-type="item"]::before {
      content: '\\00a7';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="asterisk"] > li::before,
    ul[data-display='inline'][data-bullet-style="asterisk"] > [data-type="item"]::before {
      content: '*';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="dash"] > li::before,
    ul[data-display='inline'][data-bullet-style="dash"] > [data-type="item"]::before {
      content: '-';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="none"] > li::before,
    ul[data-display='inline'][data-bullet-style="none"] > [data-type="item"]::before {
      content: none;
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style]:not([data-bullet-style='bullet']):not([data-bullet-style='open-circle']):not([data-bullet-style='pilcrow']):not([data-bullet-style='rpilcrow']):not([data-bullet-style='section']):not([data-bullet-style='asterisk']):not([data-bullet-style='dash']):not([data-bullet-style='none'])::before {
      content: '[' 'data-bullet-style=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    ul[data-display='inline'] > li {
      display: inline;
    }
    ul[data-display='inline']:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    ul[data-display='inline'][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    ul[data-display='inline'][data-bullet-style="bullet"] > li::before,
    ul[data-display='inline'][data-bullet-style="bullet"] > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-bullet-style="open-circle"] > li::before,
    ul[data-display='inline'][data-bullet-style="open-circle"] > [data-type="item"]::before {
      content: '\\25cb';
      margin-right: 0.5em;
    }
    ul[data-display='inline'] > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    ol[data-display='inline'] {
      display: inline;
      counter-reset: list-item;
      list-style-type: none;
    }
    ol[data-display='inline'] > li {
      display: inline;
    }
    ol[data-display='inline']:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    ol[data-display='inline'][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    ol[data-display='inline'] > [data-type="item"],
    ol[data-display='inline'] > li {
      counter-increment: list-item;
    }
    ol[data-display='inline'][data-number-style="arabic"] > [data-type="item"]::before,
    ol[data-display='inline'][data-number-style="arabic"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, decimal) attr(data-mark-suffix) '. ';
    }
    ol[data-display='inline'][data-number-style="arabic"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    ol[data-display='inline'][data-number-style="arabic"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, decimal) '.';
      margin-right: 0.5em;
    }
    ol[data-display='inline'][data-number-style="upper-alpha"] > [data-type="item"]::before,
    ol[data-display='inline'][data-number-style="upper-alpha"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, upper-alpha) attr(data-mark-suffix) '. ';
    }
    ol[data-display='inline'][data-number-style="upper-alpha"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    ol[data-display='inline'][data-number-style="upper-alpha"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, upper-alpha) '.';
      margin-right: 0.5em;
    }
    ol[data-display='inline'][data-number-style="lower-alpha"] > [data-type="item"]::before,
    ol[data-display='inline'][data-number-style="lower-alpha"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, lower-alpha) attr(data-mark-suffix) '. ';
    }
    ol[data-display='inline'][data-number-style="lower-alpha"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    ol[data-display='inline'][data-number-style="lower-alpha"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, lower-alpha) '.';
      margin-right: 0.5em;
    }
    ol[data-display='inline'][data-number-style="upper-roman"] > [data-type="item"]::before,
    ol[data-display='inline'][data-number-style="upper-roman"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, upper-roman) attr(data-mark-suffix) '. ';
    }
    ol[data-display='inline'][data-number-style="upper-roman"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    ol[data-display='inline'][data-number-style="upper-roman"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, upper-roman) '.';
      margin-right: 0.5em;
    }
    ol[data-display='inline'][data-number-style="lower-roman"] > [data-type="item"]::before,
    ol[data-display='inline'][data-number-style="lower-roman"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, lower-roman) attr(data-mark-suffix) '. ';
    }
    ol[data-display='inline'][data-number-style="lower-roman"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    ol[data-display='inline'][data-number-style="lower-roman"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, lower-roman) '.';
      margin-right: 0.5em;
    }
    ul[data-display='inline'][data-labeled-item] {
      display: inline;
      list-style-type: none;
    }
    ul[data-display='inline'][data-labeled-item] > li {
      display: inline;
    }
    ul[data-display='inline'][data-labeled-item]:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    ul[data-display='inline'][data-labeled-item][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item]) {
      list-style-type: none;
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item]):not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item])[data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item])[data-bullet-style="bullet"] > li::before,
    [data-type='list']:not([data-list-type]):not([data-labeled-item])[data-bullet-style="bullet"] > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item])[data-bullet-style="open-circle"] > li::before,
    [data-type='list']:not([data-list-type]):not([data-labeled-item])[data-bullet-style="open-circle"] > [data-type="item"]::before {
      content: '\\25cb';
      margin-right: 0.5em;
    }
    [data-type='list']:not([data-list-type]):not([data-labeled-item]) > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='bulleted'] {
      list-style-type: none;
    }
    [data-type='list'][data-list-type='bulleted']:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    [data-type='list'][data-list-type='bulleted'][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    [data-type='list'][data-list-type='bulleted'][data-bullet-style="bullet"] > li::before,
    [data-type='list'][data-list-type='bulleted'][data-bullet-style="bullet"] > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='bulleted'][data-bullet-style="open-circle"] > li::before,
    [data-type='list'][data-list-type='bulleted'][data-bullet-style="open-circle"] > [data-type="item"]::before {
      content: '\\25cb';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='bulleted'] > [data-type="item"]::before {
      content: '\\25cf';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='enumerated'] {
      counter-reset: list-item;
      list-style-type: none;
    }
    [data-type='list'][data-list-type='enumerated']:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    [data-type='list'][data-list-type='enumerated'][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    [data-type='list'][data-list-type='enumerated'] > [data-type="item"],
    [data-type='list'][data-list-type='enumerated'] > li {
      counter-increment: list-item;
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="arabic"] > [data-type="item"]::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="arabic"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, decimal) attr(data-mark-suffix) '. ';
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="arabic"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="arabic"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, decimal) '.';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-alpha"] > [data-type="item"]::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-alpha"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, upper-alpha) attr(data-mark-suffix) '. ';
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-alpha"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-alpha"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, upper-alpha) '.';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-alpha"] > [data-type="item"]::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-alpha"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, lower-alpha) attr(data-mark-suffix) '. ';
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-alpha"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-alpha"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, lower-alpha) '.';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-roman"] > [data-type="item"]::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-roman"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, upper-roman) attr(data-mark-suffix) '. ';
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-roman"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="upper-roman"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, upper-roman) '.';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-roman"] > [data-type="item"]::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-roman"] > li::before {
      content: attr(data-mark-prefix) counter(list-item, lower-roman) attr(data-mark-suffix) '. ';
    }
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-roman"] > [data-type="item"]:not([data-mark-prefix]):not([data-mark-suffix])::before,
    [data-type='list'][data-list-type='enumerated'][data-number-style="lower-roman"] > li:not([data-mark-prefix]):not([data-mark-suffix])::before {
      content: counter(list-item, lower-roman) '.';
      margin-right: 0.5em;
    }
    [data-type='list'][data-list-type='labeled-item'] {
      list-style-type: none;
    }
    [data-type='list'][data-list-type='labeled-item']:not([data-item-sep]) > span[data-type="item"]:not(:last-child)::after {
      content: ';';
    }
    [data-type='list'][data-list-type='labeled-item'][data-item-sep] > [data-type="item"]:not(:last-child)::after {
      content: ';';
      content: '[' 'data-item-sep=CUSTOM' ' NOT_IMPLEMENTED_YET' ']';
    }
    div[data-type='list'][data-list-type] {
      padding-left: 2.5rem;
      margin-bottom: 1rem;
    }
    [data-type="note"],
    .note {
      margin: 3rem 6rem 0 6rem;
      padding: 1.5rem;
      background-color: #ededed;
    }
    @media (max-width: 767px) {
      [data-type="note"],
      .note {
        margin-left: 0;
        margin-right: 0;
      }
    }
    [data-type="note"]:not([data-label]).ui-has-child-title > header > [data-type="title"],
    .note:not([data-label]).ui-has-child-title > header > [data-type="title"],
    [data-type="note"]:not([data-label]).ui-has-child-title > [data-type="title"],
    .note:not([data-label]).ui-has-child-title > [data-type="title"],
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .title,
    .note:not([data-label]).ui-has-child-title > header > .title,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .os-title,
    .note:not([data-label]).ui-has-child-title > header > .os-title,
    [data-type="note"]:not([data-label]).ui-has-child-title > .title,
    .note:not([data-label]).ui-has-child-title > .title,
    [data-type="note"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"],
    .note:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    [data-type="note"]:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    .note:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    .note:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .title::before,
    .note:not([data-label]).ui-has-child-title > header > .title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > header > .os-title::before,
    .note:not([data-label]).ui-has-child-title > header > .os-title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title > .title::before,
    .note:not([data-label]).ui-has-child-title > .title::before,
    [data-type="note"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"][data-label=''].ui-has-child-title > header > [data-type="title"],
    .note[data-label=''].ui-has-child-title > header > [data-type="title"],
    [data-type="note"][data-label=''].ui-has-child-title > [data-type="title"],
    .note[data-label=''].ui-has-child-title > [data-type="title"],
    [data-type="note"][data-label=''].ui-has-child-title > header > .title,
    .note[data-label=''].ui-has-child-title > header > .title,
    [data-type="note"][data-label=''].ui-has-child-title > header > .os-title,
    .note[data-label=''].ui-has-child-title > header > .os-title,
    [data-type="note"][data-label=''].ui-has-child-title > .title,
    .note[data-label=''].ui-has-child-title > .title,
    [data-type="note"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"],
    .note[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    [data-type="note"][data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    .note[data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"][data-label=''].ui-has-child-title > [data-type="title"]::before,
    .note[data-label=''].ui-has-child-title > [data-type="title"]::before,
    [data-type="note"][data-label=''].ui-has-child-title > header > .title::before,
    .note[data-label=''].ui-has-child-title > header > .title::before,
    [data-type="note"][data-label=''].ui-has-child-title > header > .os-title::before,
    .note[data-label=''].ui-has-child-title > header > .os-title::before,
    [data-type="note"][data-label=''].ui-has-child-title > .title::before,
    .note[data-label=''].ui-has-child-title > .title::before,
    [data-type="note"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    .note[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    .note[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .title,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > .title,
    .note[data-label]:not([data-label='']).ui-has-child-title > .title,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"],
    .note[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      color: #555555;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title > .title::before,
    .note[data-label]:not([data-label='']).ui-has-child-title > .title::before,
    [data-type="note"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .note[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="note"] > section,
    .note > section {
      padding: 0.5rem 1.5rem;
      border-top: 0.1rem solid #555555;
      background-color: #ededed;
    }
    [data-type="example"],
    .example {
      margin-top: 3rem;
    }
    [data-type="example"]:not([data-label]).ui-has-child-title > header > [data-type="title"],
    .example:not([data-label]).ui-has-child-title > header > [data-type="title"],
    [data-type="example"]:not([data-label]).ui-has-child-title > [data-type="title"],
    .example:not([data-label]).ui-has-child-title > [data-type="title"],
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .title,
    .example:not([data-label]).ui-has-child-title > header > .title,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .os-title,
    .example:not([data-label]).ui-has-child-title > header > .os-title,
    [data-type="example"]:not([data-label]).ui-has-child-title > .title,
    .example:not([data-label]).ui-has-child-title > .title,
    [data-type="example"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"],
    .example:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      padding: 0.1em 1em;
      font-weight: bold;
      color: #ededed;
      background-color: #555555;
    }
    [data-type="example"]:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    .example:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    .example:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .title::before,
    .example:not([data-label]).ui-has-child-title > header > .title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > header > .os-title::before,
    .example:not([data-label]).ui-has-child-title > header > .os-title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title > .title::before,
    .example:not([data-label]).ui-has-child-title > .title::before,
    [data-type="example"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"][data-label=''].ui-has-child-title > header > [data-type="title"],
    .example[data-label=''].ui-has-child-title > header > [data-type="title"],
    [data-type="example"][data-label=''].ui-has-child-title > [data-type="title"],
    .example[data-label=''].ui-has-child-title > [data-type="title"],
    [data-type="example"][data-label=''].ui-has-child-title > header > .title,
    .example[data-label=''].ui-has-child-title > header > .title,
    [data-type="example"][data-label=''].ui-has-child-title > header > .os-title,
    .example[data-label=''].ui-has-child-title > header > .os-title,
    [data-type="example"][data-label=''].ui-has-child-title > .title,
    .example[data-label=''].ui-has-child-title > .title,
    [data-type="example"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"],
    .example[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      padding: 0.1em 1em;
      font-weight: bold;
      color: #ededed;
      background-color: #555555;
    }
    [data-type="example"][data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    .example[data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"][data-label=''].ui-has-child-title > [data-type="title"]::before,
    .example[data-label=''].ui-has-child-title > [data-type="title"]::before,
    [data-type="example"][data-label=''].ui-has-child-title > header > .title::before,
    .example[data-label=''].ui-has-child-title > header > .title::before,
    [data-type="example"][data-label=''].ui-has-child-title > header > .os-title::before,
    .example[data-label=''].ui-has-child-title > header > .os-title::before,
    [data-type="example"][data-label=''].ui-has-child-title > .title::before,
    .example[data-label=''].ui-has-child-title > .title::before,
    [data-type="example"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    .example[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    .example[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .title,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > .title,
    .example[data-label]:not([data-label='']).ui-has-child-title > .title,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"],
    .example[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
      padding: 0.1em 1em;
      font-weight: bold;
      color: #ededed;
      background-color: #555555;
    }
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title > .title::before,
    .example[data-label]:not([data-label='']).ui-has-child-title > .title::before,
    [data-type="example"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .example[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="example"] > section,
    .example > section {
      padding: 0.5rem 1.5rem;
      border-top: 0.1rem solid #555555;
      background-color: #ededed;
    }
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > [data-type="title"],
    .exercise:not([data-label]).ui-has-child-title > header > [data-type="title"],
    [data-type="exercise"]:not([data-label]).ui-has-child-title > [data-type="title"],
    .exercise:not([data-label]).ui-has-child-title > [data-type="title"],
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > .title,
    .exercise:not([data-label]).ui-has-child-title > header > .title,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > .os-title,
    .exercise:not([data-label]).ui-has-child-title > header > .os-title,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > .title,
    .exercise:not([data-label]).ui-has-child-title > .title,
    [data-type="exercise"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"],
    .exercise:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
    }
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    .exercise:not([data-label]).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    .exercise:not([data-label]).ui-has-child-title > [data-type="title"]::before,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > .title::before,
    .exercise:not([data-label]).ui-has-child-title > header > .title::before,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > header > .os-title::before,
    .exercise:not([data-label]).ui-has-child-title > header > .os-title::before,
    [data-type="exercise"]:not([data-label]).ui-has-child-title > .title::before,
    .exercise:not([data-label]).ui-has-child-title > .title::before,
    [data-type="exercise"]:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .exercise:not([data-label]).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="exercise"][data-label=''].ui-has-child-title > header > [data-type="title"],
    .exercise[data-label=''].ui-has-child-title > header > [data-type="title"],
    [data-type="exercise"][data-label=''].ui-has-child-title > [data-type="title"],
    .exercise[data-label=''].ui-has-child-title > [data-type="title"],
    [data-type="exercise"][data-label=''].ui-has-child-title > header > .title,
    .exercise[data-label=''].ui-has-child-title > header > .title,
    [data-type="exercise"][data-label=''].ui-has-child-title > header > .os-title,
    .exercise[data-label=''].ui-has-child-title > header > .os-title,
    [data-type="exercise"][data-label=''].ui-has-child-title > .title,
    .exercise[data-label=''].ui-has-child-title > .title,
    [data-type="exercise"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"],
    .exercise[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
    }
    [data-type="exercise"][data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    .exercise[data-label=''].ui-has-child-title > header > [data-type="title"]::before,
    [data-type="exercise"][data-label=''].ui-has-child-title > [data-type="title"]::before,
    .exercise[data-label=''].ui-has-child-title > [data-type="title"]::before,
    [data-type="exercise"][data-label=''].ui-has-child-title > header > .title::before,
    .exercise[data-label=''].ui-has-child-title > header > .title::before,
    [data-type="exercise"][data-label=''].ui-has-child-title > header > .os-title::before,
    .exercise[data-label=''].ui-has-child-title > header > .os-title::before,
    [data-type="exercise"][data-label=''].ui-has-child-title > .title::before,
    .exercise[data-label=''].ui-has-child-title > .title::before,
    [data-type="exercise"][data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .exercise[data-label=''].ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"],
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    .exercise[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"],
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > .title,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > .title,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > .os-title,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > .title,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > .title,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"],
    .exercise[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"] {
      display: inline-block;
    }
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > [data-type="title"]::before,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > [data-type="title"]::before,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > .title::before,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > header > .os-title::before,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title > .title::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title > .title::before,
    [data-type="exercise"][data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before,
    .exercise[data-label]:not([data-label='']).ui-has-child-title .solution > section > [data-type="solution-title"]::before {
      display: none;
    }
    [data-type="exercise"] > section,
    .exercise > section {
      padding: 0.5rem 1.5rem;
      border-top: 0.1rem solid #555555;
      background-color: #ededed;
    }
  `}
`;
