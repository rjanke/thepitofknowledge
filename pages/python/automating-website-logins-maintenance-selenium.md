---
description: How to automate website logins and maintencane with Selenium for Python.
---

# Automating Website Logins & Maintenance with Selenium for Python

Tested with <Badge type="tip" text="Python 3.6" />

::: tip HEADS UP
This article was originally written in 2019 and may be outdated. It's currently under revision.
:::


## Background
You can use the [Selenium WebDriver](https://www.seleniumhq.org/projects/webdriver/) framework to access websites programmatically. You'll learn how to use Selenium to login to a website (plus avoid bot detection!), navigate to a new page, check a checkbox, and then save the change. 

I'll be using a local [Drupal](https://www.drupal.org/) (CMS) install as a demo, but this code will work on any website, just change the relevant values for your project. This code has been tested with Python 3.6. 

Let's learn some web automation techniques.  

## Outline
Here is an outline of the steps we'll taking.
- Preparing a Python virtual environment
- Open a Chrome browser window controlled by the script
- Login to a site
- Avoid bot detection to complete the login
- Enable a module (check a checkbox and click a button)
- Generate a requirements.txt file so others can easily run your program

## Preparing Python Virtual Environment
When creating Python programs it's good practice to encapsulate your projects in what's called a virtual environment. We'll use one simple command to generate a folder in the root of your project that will hold everything your Python program needs to run. When created, this folder will contain a binary of Python that's the same as the binary used to create it. Any packages you ```pip install``` will get added to this folder and not to your global system, keeping things clean. 

Open up your terminal. 

::: tip HEADS UP
The ```$``` denotes the command line itself. Commands you type will follow it.
:::

### Check your Python version

```bash
$ python -V
```

::: tip HEADS UP
On Linux you may need to run this command.
:::

```bash
$ python3 -V
```

If so, anytime ```python``` is used in a command, be sure to use ```python3``` instead. 

Navigate to the folder you want this project to live in.

If you're on Python 2.x the following command will not work for you. I suggest using Python 3.3+ but if not, look for another virtual environment solution like [virtualenv](https://virtualenv.pypa.io/en/latest/) for Python 2/3. 

Let's create a virtual environment for this Python 3 project. I'm using version 3.6.

```bash
$ python -m venv venv
```

This will create a new folder in your project called "venv". The command may be confusing at first, but the first ```venv``` is the virtual environment command and the second is the name of the virtual environment (it could be anything). The commands below assume you have named your virtual environment "venv".

### Activate your new virtual environment

Just because we ran the command above does **not** mean we get the benefits of a virtual environment. We will need to activate it first. 

::: tip HEADS UP
See the differences for Windows and Linux below.
:::

Run this command to activate your virtual environment. 

#### Windows
```bash
$ venv\Scripts\activate
```

#### Linux
```bash
$ source venv\bin\activate
```

You should see this in your terminal now:
```bash
(venv) $ 
```

Now that the virtual environment is activated, anytime we ```pip install``` something, the package will get installed inside our ```/venv``` folder. We'll also be able to easily generate a ```requirements.txt``` file so anyone else (or our future self) can easily replicate the exact dependencies of this project in another virtual environment. We'll go over this at the end.

## Starting to Code
Create a new file in your project root called ```login.py```. This will be the only file that you will need to create for this project. 

### Install Selenium
[Selenium](https://www.seleniumhq.org/) is a browser automation tool available in multiple programming languages. We'll be using the Python version. Remember, your virtual environment should be activated!

```bash
(venv) $ pip install selenium
```

### Setup your WebDriver
In your ```login.py``` file make these additions.

```python
from selenium import webdriver

driver = webdriver.Chrome("")
```
In order for Selenium to know what web driver (browser) we want, we need to provide a file path to a separate program on our computer. We'll be using ChromeDriver but there are [drivers available](https://www.seleniumhq.org/download/) for the other browsers as well. 

Download the [ChromeDriver](https://chromedriver.chromium.org/downloads) version that is compatible with your system. 

==NOTE:== You will need to have Google Chrome already installed and need to make sure your version of Google Chrome matches the version of ChromeDriver. 

The download will give you a ```.zip``` file with an executable program inside. Unzip the file. Place the program somewhere that makes sense on your machine. I'm on Windows and I put my program here ```E:/programs/chromedriver/chromedriver.exe```. 

Now update your code in ```login.py``` to reflect the path to the ChromeDriver program.
```python
from selenium import webdriver

driver = webdriver.Chrome("E:/programs/chromedriver/chromedriver.exe")
```
==WINDOWS NOTE:== Make sure to change the slashes in the path to the ChromeDriver from using back slashes (\\) to forward slashes (/).

==NOTE:== Any computer you try to run this program on will need to have a browser driver installed and configured in the program. 