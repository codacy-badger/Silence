/*

   Copyright 2018 (Fairy)Phy

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0       

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

    dbconf.js
    Codename: silence
    v1.5.12
    Twitter: @Fairy_Phy
*/
const mysql = require('mysql');

const dbConfig = {
    host : 'localhost',
    user : '[User]',
    password : '[Password]',
    database: '[datadase]',
    multipleStatements: true
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;