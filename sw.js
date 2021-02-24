self.addEventListener('install', (e) => {
    console.log('Installed');
    
});
this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
    //purely for installability lmfao
});