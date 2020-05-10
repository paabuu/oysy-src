###
 # @author: yangwenjie
 # @file: description
 # @Date: 2020-05-04 18:38:15
 # @LastEditors: yangwenjie
 # @LastEditTime: 2020-05-10 22:02:10
 ###
yarn build

cd ../

rm -rf ./lxy/js
rm -rf ./lxy/css
rm -rf ./lxy/img

cd ./lxy/

mv ../oysy-src/dist/* .

git add .

git commit -m 'update'

git push