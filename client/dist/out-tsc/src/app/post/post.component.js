import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from "@angular/router";
var PostComponent = /** @class */ (function () {
    function PostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        console.log(this.apiURL);
    };
    PostComponent.prototype.deletePost = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.post.title + "?")) {
            console.log("deleting " + this.post._id);
            this.postService.deletePost(this.post._id)
                .subscribe(function (result) {
                // alert(`Post ${this.post.title} has been deleted`);
                _this.router.navigate(['/allposts']);
            });
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostComponent.prototype, "apiURL", void 0);
    PostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css'],
            providers: [PostService]
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, Router])
    ], PostComponent);
    return PostComponent;
}());
export { PostComponent };
//# sourceMappingURL=post.component.js.map