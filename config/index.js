module.exports = {
    admin: {
        dev: {
            env: 'development',
            publicPath: '/',
            host: 'localhost',
            port: '8090',
            assetsSubDirectory: 'static',
            devtoolType: 'cheap-module-eval-source-map',
            proxyTable: {  //proxy代理
                '/admin_demo_api': {
                    target: 'http://localhost/admin_demo_api/',
                    changeOrigin: true,
                    pathRewrite: {
                      '^/admin_demo_api': '/'
                    }
                }
            }
        },
        build: {
            env: 'production', // 当前环境
            publicPath: '/', // html引用资源路径
            assetsPath: 'static', // 静态资源目录
            assetsSubDirectory: 'static', // html资源存放目录
            devtoolType: 'source-map', // 代码位置信息
            productionGzip: true, //开启Gzip压缩
            productionGzipExtensions: ['js', 'css'] //Gzip压缩文件
        }
    },

    client: {
        dev: {
            env: 'development',
            publicPath: '/',
            host: 'localhost',
            port: '8080',
            assetsSubDirectory: 'static',
            devtoolType: 'cheap-module-eval-source-map',
            proxyTable: {
                '/client_demo_api': {
                    target: 'http://localhost/client_demo_api/',
                    changeOrigin: true,
                    pathRewrite: {
                      '^/client_demo_api': '/'
                    }
                }
            }
        },
        build: {
            env: 'production',
            publicPath: '/',
            assetsPath: 'static',
            assetsSubDirectory: 'static',
            devtoolType: 'source-map',
            productionGzip: true,
            productionGzipExtensions: ['js', 'css'] 
        }
    }
    
}