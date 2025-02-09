开发者手册



## 通过语义化版本来管理 npm 依赖关系

`Versions` of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

在使用外部依赖项（大多数情况都是这样）进行软件开发时，了解语义化版本会很有用。 这些数字保存着项目的偶然发生的破坏性改变，不会让人对项目昨天还正常，今天却无法运行而百思不解。 根据官网，这是语义化版本的工作方式：

```json
"package": "MAJOR.MINOR.PATCH"
```

当做了不兼容的 API 修改，应该增加主版本号（MAJOR）； 当新增了向下兼容的新功能时，应该增加次版本号（MINOR）； 当修复了向下兼容的 bug 时，应该增加修订号（PATCH）。 这意味着修订号是用来修复错误的，次版本号则是添加了新功能，但它们都没有破坏之前的功能。 主版本号（MAJOR）是添加了不兼容早期版本的更改。

### ~

可以在依赖项的版本号前加一个波浪号（`~`），以让 npm 依赖项更新到最新的修订版。 这里有一个允许升级到任何 `1.3.x` 的例子。

```json
"package": "~1.3.8"
```

------

在 package.json 文件中，你当前关于 npm 如何升级 `@freecodecamp/example` 的规则是使用特定版本（`1.2.13`）。 但现在，你想允许最新的 `1.2.x` 版本。

在依赖项中使用波浪号（`~`）字符作为 `@freecodecamp/example` 版本的前缀，并允许 npm 将其更新为任何新的*补丁*发布。

**注意：** 原来的版本号不用更改。

### \^

你当前的 `@freecodecamp/example` 版本应该是 `~1.2.13`，它允许 npm 安装到最新的 `1.2.x` 版本。 如果你使用插入符号（^）作为版本前缀，npm 将被允许更新到任何 `1.x.x` 版本。

```json
"package": "^1.3.8"
```

这会将依赖包更新到任意的 `1.x.x` 版本。

------

使用插入符号（`^`）为依赖项中的 `@freecodecamp/example` 版本添加前缀，并允许 npm 将其更新到任何新的 MINOR 版本。