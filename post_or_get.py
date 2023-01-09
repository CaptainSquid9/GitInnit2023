from flask import Flask, request

app = Flask(__name__)

@app.route('/result/get-data', methods=['GET'])
def handle_get_request():
  data = request.args
  
  response = "Got data: {}".format(data)
  
  return response

if __name__ == '__main__':
  app.run()
