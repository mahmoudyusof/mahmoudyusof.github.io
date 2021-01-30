---
project: general
slug: client-side-inference
title: "Client Side Inference"
type: article
description: How to convert models to JavaScript compatible format, save them on the clients' browsers and load them for inference.
image: https://mahmoudyusof.github.io/seo_images/client-side-inference.jpg
url: https://mahmoudyusof.github.io/general/client-side-inference/
---

# Client Side Inference with TFJS
This article explains everything you need to know in order to start using deeplearning models in the browser.  
In particular, we are going to talk about running inference in the browswer, since training models in the browser doesn't really make that much sense. God bless Google Colab <3

## Why?
Traditionally, we used to load a model in server (usually flask servers), send requests with the input features to that server, run inference and send the results in the response. That's fine, but if you have a big web app that handles a lot of different requests, then it makes perfect sense to outsource some of the computations to the front-end, which would improve the performance of your web app.  
The most time consuming task you might have in your webserver might be the inference task, if you outsource this task to the browser, your server is going to be blazing fast.

## How?
Sold, now tell me how to do it.  
We all know that the most used language on the browser is JavaScript. If you don't like it, then maybe this article is not for you.  
Let's see the steps that we need to go through to get what we want.  
- Install tensorflowjs-converter.
- Convert a saved model to js compatible format.
- Send the model in a response and save it in the browser.
- Load the model from the browser and run inference.

See <a class="mdlink" href="https://mahmoudyusof.github.io/general/saving-keras-models/">this article</a> to know how to save your trained models.

### Installing tensorflowjs-converter
This CLI tool comes by default when you install tensorflowjs via pip.  
```shell
$ pip install tensorflowjs
```