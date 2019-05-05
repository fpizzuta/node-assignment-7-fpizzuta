import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
var EditpostComponent = /** @class */ (function () {
    function EditpostComponent(postService, route, flashMessage) {
        this.postService = postService;
        this.route = route;
        this.flashMessage = flashMessage;
    }
    EditpostComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    EditpostComponent.prototype.getPost = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(param)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    EditpostComponent.prototype.updatePost = function (obj) {
        var _this = this;
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
            _this.flashMessage.show('Edit Successful', { cssClass: 'flash', timeout: 3000 });
        });
    };
    EditpostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-editpost',
            templateUrl: './editpost.component.html',
            styleUrls: ['./editpost.component.css'],
            providers: [PostService]
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, ActivatedRoute, FlashMessagesService])
    ], EditpostComponent);
    return EditpostComponent;
}());
export { EditpostComponent };
//# sourceMappingURL=editpost.component.js.map