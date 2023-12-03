import axios from "axios";

class HelloWorldService{
    executeHelloWorldService(){
        console.log('executed service');
        return axios.get('http://localhost:8080/api/hi');
    }
   
}

export default new HelloWorldService()