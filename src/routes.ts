import {Request, Response} from 'express';
import createUser from '../services/CreateUser';

export function helloWorld (request: Request, response: Response){
    const user = createUser({
        email: 'eduardomacedo.eng@hotmail.com', 
        password: '123456',
        techs: [
            {title: 'NodeJs', experience: 100},
            {title: 'ReactJS', experience: 80},
            {title: 'React Native', experience: 120}
        ]
    });
    
    return response.json({message: 'Hello World'});
}