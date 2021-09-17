# Rules project 🔒

## Routes 🚧

- Home "/"
- Home "/auth"
  - Avoid use "exact" in AppRouter -> `<Route path="/auth" />`
- Menu "/menu"
- About "/about"

## helpers 🛠

the file name for helpers folder must initial with extension "help(name)"

Example:

` helpHttps.js`

## redux files (context) ✨

### actions

the file name for action folder must the extension ".action." before close and put the javascript extension

Example:

`auth.action.js`

### reducers

The file name for reducer folder must initial with camelcase and put the reducer word in Uppercase after reducer name

Example:

`authReducer.js`
