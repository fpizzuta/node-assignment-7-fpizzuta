import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostService } from './post.service';
import { environment } from '../environments/environment';
import { FlashMessagesService } from 'angular2-flash-messages';
var AppComponent = /** @class */ (function () {
    function AppComponent(postService, flashMessage) {
        this.postService = postService;
        this.flashMessage = flashMessage;
        this.title = 'angularStart';
        this.username = "Placeholder";
        this.postList = null;
        this.apiURL = '';
        //here
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.postList = this.postService.listPosts();
        this.postService.listPosts().subscribe(function (posts) {
            _this.postList = posts;
        });
        this.apiURL = environment.apiURL;
        console.log('apiURL ' + this.apiURL);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [PostService]
        }),
        tslib_1.__metadata("design:paramtypes", [PostService, FlashMessagesService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map