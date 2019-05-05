import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
var PostdetailComponent = /** @class */ (function () {
    function PostdetailComponent(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    PostdetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    PostdetailComponent.prototype.getPost = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(param)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    PostdetailComponent.prototype.updatePost = function (obj) {
        this.post._id = obj._id;
        this.post.title = obj.title;
        this.post.date = obj.date;
        this.post.audience = obj.audience;
        this.post.image = obj.image;
        this.post.message = obj.message;
        console.log("this.post: " + JSON.stringify(this.post));
        // call the photoService update method
        this.postService.updatePost(this.post._id, this.post)
            .subscribe(function (result) {
            location.reload();
        });
    };
    PostdetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-postdetail',
            templateUrl: './postdetail.component.html',
            styleUrls: ['./postdetail.component.css'],
            providers: [PostService]
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, ActivatedRoute])
    ], PostdetailComponent);
    return PostdetailComponent;
}());
export { PostdetailComponent };
//# sourceMappingURL=postdetail.component.js.map