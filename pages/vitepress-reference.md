---
description: A reference page for some of the default theme features of VitePress.
---

# VitePress Reference
{{ $frontmatter.description }}

## Markdown Extensions
[Markdown Extensions](https://vitepress.dev/guide/markdown)

## Custom Containers
### Defaults
```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom
````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## Badge
### Defaults
```html
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />

### Custom Elements
```html
Title <Badge type="info">custom element</Badge>
```
Title <Badge type="info">custom element</Badge>

## Code Blocks
### Focus In
(The coolest code block feature I've ever seen.)
::: tip
Only one space is required between `code` and `focus` (`[!code focus]`). Two spaces are used here to prevent processing.
:::
````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```
````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## Other Useful Features
#### [Import Code Snippets](https://vitepress.dev/guide/markdown#import-code-snippets)  
#### [Code Groups](https://vitepress.dev/guide/markdown#code-groups)  
#### [Markdown File Inclusion](https://vitepress.dev/guide/markdown#markdown-file-inclusion)  
#### [Math Equations](https://vitepress.dev/guide/markdown#math-equations)  
#### [Advanced Configuration](https://vitepress.dev/guide/markdown#advanced-configuration)  