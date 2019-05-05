import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.apiURL = environment.apiURL;
    }
    PostService.prototype.listPosts = function () {
        return this.http.get(this.apiURL + '/api/posts');
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete(this.apiURL + '/api/posts/' + id);
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.apiURL + '/api/posts/' + id);
    };
    PostService.prototype.updatePost = function (id, post) {
        return this.http.put(this.apiURL + '/api/posts/' + id, post);
    };
    PostService.prototype.newPost = function (post) {
        return this.http.post(this.apiURL + '/api/posts/', post);
    };
    PostService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map