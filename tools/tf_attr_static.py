#!/usr/bin/python3
#encoding: utf8

import pystache, json, steam
from optparse import OptionParser

def main():
  parser = OptionParser("usage: %prog [apikey]")
  _, argv = parser.parse_args()
  if len(argv) != 1:
    parser.error("expected an API key and only an API key")

  steam.api.key.set(argv[0])

  # data = {}
  data = steam.api.interface("IEconItems_440").GetSchemaOverview(language='en_US',version=1)

  with open('schema_overview.json', 'w') as f:
    json.dump(data, f, indent=4, separators=(',', ': '))
  
  with open('../items/attributes.html', 'wb') as f:
    renderer = pystache.Renderer("utf8", "utf8")
    f.write(renderer.render_path('attributes.mustache', data['result']).encode('utf8'))

if __name__ == "__main__":
  main()
