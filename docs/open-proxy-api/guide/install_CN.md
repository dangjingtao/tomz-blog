# 安装

## 通过Docker 安装

请准备暴露5090端口的机器。

```shell
docker pull tomz2024/open-proxy-api:latest
```

```shell
docker run -it -d --init --name open-proxy-api -p 5090:5090 -e tomz2024/open-proxy-api:latest
```

```shell
# 查看实时日志
docker logs -f open-proxy-api
# 重启服务
docker restart open-proxy-api
# 停止服务
docker stop open-proxy-api
```

### 通过 Docker-compose 安装

```yaml
version: "3"

services:
  open-proxy-api:
    container_name: open-proxy-api
    image: tomz2024/open-proxy-api:latest
    restart: always
    ports:
      - "5090:5090"
    environment:
      - TZ=Asia/Shanghai
      - QWEN_AUTHORIZATION=xxx
      - KIMI_AUTHORIZATION=yyy
      - DEEPSEEK_AUTHORIZATION=zzz
```

### 环境变量设置

| Name                   | Optional | Remarks            |
| ---------------------- | -------- | ------------------ |
| QWEN_AUTHORIZATION     | Y        | Bearer + {API_KEY} |
| KIMI_AUTHORIZATION     | Y        | Bearer + {API_KEY} |
| DEEPSEEK_AUTHORIZATION | Y        | Bearer + {API_KEY} |

多用户模式：

```
Bearer TOKEN1,TOKEN2,TOKEN3
```

## 手动部署

部署前保证安装Nodejs最新稳定版本。

```
npm i
```

安装pm2

```
npm i -g pm2
```

生产打包

```
npm run build
```

启动服务

```
pm2 start dist/index.js --name "open-proxy-api"
```

查看实时日志

```
pm2 logs open-proxy-api
```

重启服务

```
pm2 reload open-proxy-api
```

停止服务

```
pm2 stop open-proxy-api
```

