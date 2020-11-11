import React, { useState, useEffect } from 'react'
import "../../styles/membership/custom.scss";

function Page1(props) {
return(
<>
<div className="myFavoriteWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">喜歡的文章</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">追蹤的商品</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
        <div className="col myFavoriteArticleCard">
            <img className="myFavoriteArticleImg" src="./image/membership/articleImg1.jpg" alt="pet image" />                
            <div className="myFavoriteArticleDetail">
                <article className="articleTopic">貓咪們都會這樣，你知道嗎？</article>
                <article className="authorName">撰稿人/ bemo機器人</article>
                <article className="articleContent">  若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情", 是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…</article>
                <div className="morePlus">
                    <a className="moreArticle" href="#">more+</a>
                </div>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>
            
        <div className="col myFavoriteArticleCard">
            <img className="myFavoriteArticleImg" src="./image/membership/articleImg1.jpg" alt="pet image" />                
            <div className="myFavoriteArticleDetail">
                <article className="articleTopic">貓咪們都會這樣，你知道嗎？</article>
                <article className="authorName">撰稿人/ bemo機器人</article>
                <article className="articleContent">  若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情", 是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…</article>
                <div className="morePlus">
                    <a className="moreArticle" href="#">more+</a>
                </div>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>

        <div className="col myFavoriteArticleCard">
            <img className="myFavoriteArticleImg" src="./image/membership/articleImg1.jpg" alt="pet image" />                
            <div className="myFavoriteArticleDetail">
                <article className="articleTopic">貓咪們都會這樣，你知道嗎？</article>
                <article className="authorName">撰稿人/ bemo機器人</article>
                <article className="articleContent">  若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情", 是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…</article>
                <div className="morePlus">
                    <a className="moreArticle" href="#">more+</a>
                </div>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>

        <div className="col myFavoriteArticleCard">
            <img className="myFavoriteArticleImg" src="./image/membership/articleImg1.jpg" alt="pet image" />                
            <div className="myFavoriteArticleDetail">
                <article className="articleTopic">貓咪們都會這樣，你知道嗎？</article>
                <article className="authorName">撰稿人/ bemo機器人</article>
                <article className="articleContent">  若能夠欣賞到寵物知識的美，相信我們一定會對寵物知識改觀。對於寵物知識，我們不能不去想，卻也不能走火入魔。誇美紐斯講過一段深奧的話，"良好的模範懇切的語言和真誠坦白的同情", 是指家長、教師、同學及其他人的示範對兒童的影響。這不禁…</article>
                <div className="morePlus">
                    <a className="moreArticle" href="#">more+</a>
                </div>
            </div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
        </div>
    </div>
</div>

<div className="myFavoriteWrap">
    <nav className="nav nav-pills flex-sm-row petAreaNavGroup">
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav" href="#">喜歡的文章</a>
        <a className="flex-sm-fill text-sm-center nav-link petAreaNav active" href="#">追蹤的商品</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
    </nav>
    <div className="container petAreaBackgroud">
        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>

        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>

        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>

        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>

        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>

        <div className="col myFavoriteProductCard">
            <img className="myFavoriteProductImg" src="./image/membership/brothcan-1-510x510.jpg" alt="favorit image" />                
            <div className="myFavoriteProductDetail">
                <article className="productName">鮮肉煲罐頭</article>
                <article className="productPrice">NT$240</article>
            </div>
            <div className="myFavoriteProductSvgGroup">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 myFavoriteProductHeart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                <svg className="myFavoriteProductCart" xmlns="http://www.w3.org/2000/svg" width="26.865" height="27.721" viewBox="0 0 26.865 27.721"><g id="Group_607" data-name="Group 607" transform="translate(0.5 0.5)"><circle id="Ellipse_10" data-name="Ellipse 10" cx="1.98" cy="1.98" r="1.98" transform="translate(7.983 22.76)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></circle><path id="Path_1085" data-name="Path 1085" d="M268.477,324.1h0a1.98,1.98,0,1,0,1.98,1.98A1.98,1.98,0,0,0,268.477,324.1Z" transform="translate(-246.608 -301.338)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path><path id="Path_1086" data-name="Path 1086" d="M31.8,19.73H15.326L15,17.583H28.541a.978.978,0,0,0,.9-.7l3.223-9.328a1.17,1.17,0,0,0-.545-1.44.857.857,0,0,0-.357-.077H13.327L12.554.925A1.014,1.014,0,0,0,11.587,0H7.88A1.046,1.046,0,0,0,6.913,1.11,1.046,1.046,0,0,0,7.88,2.221h2.9l2.772,18.8a1.014,1.014,0,0,0,.967.925H31.8a1.121,1.121,0,0,0,0-2.221Z" transform="translate(-6.913 0.001)" fill="#fffffd" stroke="#ed8f8f" stroke-width="1"></path></g></svg>
            </div>
        </div>    
        
    </div>
</div>
</>
)}

export default Page1