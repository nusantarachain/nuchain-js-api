# Nuchain JS Library

Javascript library for working with Nuchain API and extrinsics.

## Usage


```javascript
const provider = new WsProvider("wss://id.node.nuchain.network")
const api = await Nuchain.connectApi({ provider })
```

## Build

```javascript
yarn build
```

## Format code

```bash
yarn lint --fix
```

