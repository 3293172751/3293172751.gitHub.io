#!/usr/bin/env sh
###
 # @Description:bash�ű� 
 # @Author: xiongxinwei 3293172751nss@gmail.com
 # @Date: 2022-09-15 08:07:14
 # @LastEditTime: 2022-09-16 10:59:56
 # @FilePath: \undefinedd:\�ĵ�\�����\it235-vuepress\deploy_gitee.sh
 # @blog: https://nsddd.top
### 
 
# ȷ���ű��׳������Ĵ���
set -e
 
# ���ɾ�̬�ļ� , yarn docs:build
npm run docs:build

# git��ʼ����ÿ�γ�ʼ����Ӱ������
git add -A
git commit -m 'deploy'

# �������Ҫ���� https://USERNAME.github.io
git push -u origin "master"