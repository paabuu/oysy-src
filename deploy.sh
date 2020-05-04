###
 # @author: yangwenjie
 # @file: description
 # @Date: 2020-05-04 18:38:15
 # @LastEditors: yangwenjie
 # @LastEditTime: 2020-05-04 18:45:28
 ###
yarn build

cd ../

rm -rf ./oysy/js
rm -rf ./oysy/css
rm -rf ./oysy/img

cd ./oysy/

mv ../oysy-src/dist/* .

git add .

git commit -m 'update'

git push