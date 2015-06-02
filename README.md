[![Build Status](https://travis-ci.org/mnaresh2012/mnaresh2012.github.io.svg?branch=master)](https://travis-ci.org/mnaresh2012/mnaresh2012.github.io)

#equalHeight Plug-in (BETA) [![GitHub version](http://img.shields.io/badge/version-0.0.1-brightgreen.svg)]()
An useful plug-in for the e-commerce web application. What it does is, it will check a collection of elements height and return with the highest one. The highest value will apply to the each element.

###Dependencies - 
jQuery - 
We can achieve this functionality with native javascript as-well. But I did with jQuery. Because of it's popularity.
###Usage and Example -
For more details, follow the link - [mnaresh2012.github.io](http://mnaresh2012.github.io/index.html)
```
To initialze the plugin -
$('#myContainer ul li').equalHeight();
```

```
Example -
HTML - 
<ul id='equalHeight'>
    <li>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut quas saepe blanditiis laboriosam.?</p>
    </li>
    <li>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut quas saepe blanditiis laboriosam assumenda atque eos. Quos saepe molestias enim minima sed iste excepturi pariatur voluptatum repellat nam accusantium? laboriosam assumenda atque eos. Quos saepe molestias enim minima sed iste excepturi pariatur voluptatum.</p>
    </li>
    <li>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut quas saepe blanditiis laboriosam assumenda atque eos. Quos saepe molestias enim minima sed iste excepturi pariatur voluptatum repellat nam accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia obcaecati ipsa architecto quasi dolor error ratione saepe nisi distinctio minus repellat laboriosam quae accusamus iusto culpa asperiores minima commodi voluptatem.</p>
    </li>
    <li>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut quas saepe blanditiis laboriosam.?</p>
    </li>
</ul>

javascript - 
$('#equalHeight li').equalHeight();
```

###Contributing -
Please feel free to modify as your need.

###Changelog -
> 0.0.1: BETA version

### Licence [![License version](http://img.shields.io/badge/License-MIT-red.svg)]()
> The MIT License (MIT)
