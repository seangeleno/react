# What Setting the refs is Actually Doing

```javascript
<input placeholder="Name:" ref={{input} => this._author = input} />
```
# Is the same as...

```javascript
  <input placeholder="Name:" ref={function(input){
    this._author = input;
  }.bind(this)
} />

```
