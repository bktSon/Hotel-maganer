module.export = {
    app: {
        port: 3000
    },
    db: {
        knex: {
            {
                client: 'mysql',
                connection: {
                    host : '127.0.0.1',
                    user : 'your_database_user',
                    password : 'your_database_password',
                    database : 'myapp_test'
                }
            }
        }
    }
}
