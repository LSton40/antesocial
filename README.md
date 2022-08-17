# AnteSocial: A Basic Social-Networking API

By: Logan Sutton  

## Description  

The AnteSocial API is a basic app designed to manage a simple social networking detabase. This app allows a user to add Users including a username and email and associate a User with other Users as "friends". A user may also add one or more Thoughts associated with an existing User. In addition, users may create Reactions to a published Thought, including non-networked users.

As well as creating new Users, Thoughts, Friend associations, and Reactions, a user may simply view all User and Thought records, view individual Users and Thoughts by searching on the ID number, update a User or Thought, or delete a User, Thought, Friend association, or Reaction. When a User is deleted, all over their associated Thoughts are also deleted. Also, when a Thought is deleted, all associated Reactions are deleted as well.

The AnteSocial API is a backend software only and requires a third party platform to interface. Insomnia is used in the demonstration video.

Link to video walkthrough: [AnteSocial Social-Networking Walkthrough](https://drive.google.com/file/d/1IONDuqcC2yQS65ThRR3oxaxdrWymO34a/view)

## Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [How to Contribute](#how-to-contribute)  
- [Tests](#tests)  
- [Questions](#questions)  

## Installation  
    
This API requires the installation of MongoDB, Mongoose ORM, Express.js, and Node.js in order to function. Video walkthrough makes use of Insomnia platform for interfacing with the database.  

## Usage  
Once the appropriate supporting software is installed, run `npm start` on the command line to initialize the server. Open Insomnia or another comparable design platform or interface in order to run `GET`, `POST`, `PUT`, and `DELETE` requests over the User and Thought models and associated Friend and Reaction properties.

## License  
    
All rights reserved.

Copyright (c) 2022 Logan Sutton.  

## How to Contribute  
  
This app was created as a graded class challenge. No contribution is requested at present.  

## Tests  
    
No tests are suggested at this time.  

## Questions  
    
[LSton40 GitHub](https://github.com/LSton40)  

If you have any questions, please contact me at logan.sutton@gmail.com.
