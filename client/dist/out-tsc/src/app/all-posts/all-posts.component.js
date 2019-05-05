import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { environment } from '../../environments/environment';
var AllPostsComponent = /** @class */ (function () {
    function AllPostsComponent(postService) {
        this.postService = postService;
        this.title = 'angularStart';
        this.username = "Placeholder";
        this.postList = null;
        this.apiURL = '';
    }
    AllPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.listPosts().subscribe(function (posts) {
            _this.postList = posts;
        });
        this.apiURL = environment.apiURL;
        console.log('apiURL ' + this.apiURL);
    };
    AllPostsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-all-posts',
            templateUrl: './all-posts.component.html',
            styleUrls: ['./all-posts.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService])
    ], AllPostsComponent);
    return AllPostsComponent;
}());
export { AllPostsComponent };
//# sourceMappingURL=all-posts.component.js.map