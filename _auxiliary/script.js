let folders =['one', 'two', 'tree'];
let PATHS;
console.log(folders);
let map = folders.map(folder => /*new HtmlWebpackPlugin*/({
	filename: `${folder}.html`,
	chunks: new Array(folder),
	template: 'PATHS.source' + `/pages/${folder}/${folder}.pug`
}));
console.log(map);
let entryList = {};
for (let i = 0; i < folders.length; i++) {
    console.log(`${folders[i]}`);
    let key = folders[i];
    // entryList[folders[i]] = 1;
    entryList[folders[i]] = (/*PATHS.source + */`/pages/${folders[i]}/${folders[i]}.js`);
};
console.log(entryList);