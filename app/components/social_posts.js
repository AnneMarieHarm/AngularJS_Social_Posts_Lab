"use strict";

angular
    .module("App", []);

//define component

const socialPosts = {
    template: `
    <form ng-submit="$ctrl.edit($ctrl.socialPosts);">
    <p>text</p>
    `,
    controller: [function() {
    }]
};

angular
    .module("App")
    .component("socialPosts", socialPosts);
