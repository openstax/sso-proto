class String
  def blank?
    respond_to?(:empty?) ? !!empty? : !self
  end
end
