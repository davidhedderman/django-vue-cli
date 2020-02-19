# A simple django application 

* see my [post on medium](https://medium.com/@davidhedderman/integrating-vue-cli-4-with-a-django-3-application-w-postgresql-c0b9d83b097c) for a detailed view on creating this project from scratch.


## For local setup

* clone project

```
$ git clone https://github.com/davidhedderman/django-vue-cli.git
$ cd django-vue-cli
```

* create virtual env

```
$ python3.6 -m venv .py36
$ source .py36/bin.activate
```

* install dependencies

```
$ pip install -r requirements.txt
```

* create database

```
(.py36) $ sudo su - postgres
postgres $ createdb -E utf8 -T template0 blog
postgres $ createuser blog_user
postgres $ psql blog
blog=# ALTER DATABASE blog OWNER TO blog_user;
blog=# GRANT ALL PRIVILEGES ON DATABASE blog TO blog_user;
```

* migrate apps

```
(.py36) $ python manage.py migrate
```

* install vue cli

```
(.py36) $ cd vue-apps/v-blog/
(.py36) ./vue-apps/v-blog $ npm install
```

* in two separate browsers run 

```
(.py36) $ python manage.py runserver
``` 

```
(.py36) ./vue-apps/v-blog $ npm run serve
```

* test the app is working as expected at http://localhost:8000

