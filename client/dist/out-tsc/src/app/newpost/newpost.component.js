import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FlashMessagesService } from 'angular2-flash-messages';
var NewpostComponent = /** @class */ (function () {
    function NewpostComponent(postService, flashMessage) {
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.post = {};
    }
    NewpostComponent.prototype.ngOnInit = function () {
    };
    NewpostComponent.prototype.save = function (obj) {
        var _this = this;
        console.log('form values ', this.post);
        this.postService.newPost(this.post)
            .subscribe(function (post) {
            location.reload();
            _this.flashMessage.show('Post Created', { cssClass: 'flash', timeout: 5000 });
        });
    };
    NewpostComponent = tslib_1.__decorate([
        Component({
            selector: 'app-newpost',
            templateUrl: './newpost.component.html',
            styleUrls: ['./newpost.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, FlashMessagesService])
    ], NewpostComponent);
    return NewpostComponent;
}());
export { NewpostComponent };
//# sourceMappingURL=newpost.component.js.map