require 'sinatra'
get '/' do
  File.read('public/portfolio2.html')
end
