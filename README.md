# mofron-comp-haruki
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

haruki input component

this source based on the codrops: https://github.com/codrops/TextInputEffects


# Install
```
npm install mofron mofron-comp-haruki
```

# Sample
```html
<setting>
    <tag load="mofron-comp-haruki">Input</tag>
</setting>

<Input label="haruki input">
    <size>2rem,0.7rem</size>
    <color>#6a7989,#f0e6fa,#787878</color>
</Input>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | label | mixed | string: label text |
| | | | mofron-comp-text: text component for label |
| | | | undefined: call as getter |
| | width | string (size) | input width |
| | | | undefined: call as getter |
| | | key-value | style option |
| | height | string (size) | input height |
| | | | undefined: call as getter |
| | | key-value | style option |
| | mainColor | mixed (color) | string: border color, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | accentColor | mixed (color) | string: text color, #hex |
| | | | array: [red, green, blue, (alpha)] |

