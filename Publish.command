cd Documents/Work/Website2014;
rm -r _Publish/*;
cp -r Solution/AeiSite.Web/* _Publish/;
cd _Publish;
rm -r admin/;
find . -name ".DS_Store" -delete;