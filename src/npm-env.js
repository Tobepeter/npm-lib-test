
// - 所有的原本通过访问符号"."来访问的属性，都需要通过下划线"_"来访问


console.log('npm_package_name: ', process.env.npm_package_name);
console.log('npm_package_version: ', process.env.npm_package_version);
console.log('npm_package_description: ', process.env.npm_package_description);

// 其他的 npm_config 下的配置可以参考
// NODE 也会作为一个环境变量存在，并且还有参数信息
const npmConfig = {
    NODE: '/Users/tobe/.nvm/versions/node/v14.20.0/bin/node',
    NODE_OPTIONS: ' --require "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/ms-vscode.js-debug/src/bootloader.js" ',
    npm_command: 'run-script',
    npm_config_cache: '/Users/tobe/.npm',
    npm_config_global_prefix: '/Users/tobe/.nvm/versions/node/v14.20.0',
    npm_config_globalconfig: '/Users/tobe/.nvm/versions/node/v14.20.0/etc/npmrc',
    npm_config_init_module: '/Users/tobe/.npm-init.js',
    npm_config_local_prefix: '/Users/tobe/Desktop/work/code-test/npm-test',
    npm_config_metrics_registry: 'https://registry.npmmirror.com/',
    npm_config_noproxy: '',
    npm_config_prefix: '/Users/tobe/.nvm/versions/node/v14.20.0',
    npm_config_registry: 'https://registry.npmmirror.com/',
    npm_config_user_agent: 'npm/9.6.6 node/v14.20.0 darwin x64 workspaces/false',
    npm_config_userconfig: '/Users/tobe/.npmrc',
    npm_execpath: '/Users/tobe/.nvm/versions/node/v14.20.0/lib/node_modules/npm/bin/npm-cli.js',
    npm_node_execpath: '/Users/tobe/.nvm/versions/node/v14.20.0/bin/node'
};
