import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons';
import { faHome}  from '@fortawesome/free-solid-svg-icons';
import { faMessage}  from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  
    const mystyle = {
        fontSize:"25px"
        };
    return (
        <div>
            <style>{"\
        @media screen and (max-width: 991px){\
        #chat2{\
            display:none\
        }\
        #bell{\
            display:none\
        }\
        }\
        .btn_download {\
            background-color: #0091F7;\
            border-radius: 8px;\
            color: #fff;\
            font-weight: 700;\
            font-size: calc(var(--normal-font-size) + 2px);\
            border: 2px solid transparent;\
            padding: 10px 14px;\
          }\
          .btn_download:hover {\
           color:#fff\
          }\
        #sc-n{\
            visibility: hidden;\
            text-align: start;\
            padding: 0.7rem 1rem;\
            border:1px solid #DBE0E4;\
            border-radius: 1em;\
            background-color: white;\
        }\
            #s-user-n:focus + #sc-n, #sc-n:focus + #sc-n{\
            visibility: visible;\
        }\
        .search-sug-n{\
            text-align: start;\
            width: 100%;\
            cursor: pointer;\
            padding: 0.2em 0;\
            font-weight: 450;\
            transition:all 200ms;\
            background:none;\
            border:none;\
        }\
        .search-sug-n:hover{\
            color:rgb(26, 243, 30)\
        }\
    "
    }</style>
    <nav class="navbar navbar-expand-lg navbar-light bg_main">
    <div class="container-fluid px-4 px-md-5">
      <a class="navbar-brand" href="./">FALL A SLEEP</a>
      <button
        class="Navbar_Toggle"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="ToggleNav"
      >
        <div></div>
      </button>
      <div id="navbar_collapse" class="navbar-collapse visibility_hidden">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#hero">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#How_It_Works">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Rows">Membership</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#download_app">Download </a>
          </li>
        </ul>
        <div className='d-flex align-items-center gap-3'>
        <a style={{fontSize:'19px',color:'#fff'}} href="/login">
         Sign in
        </a>
        <a id="btn_Download" href="/register" class="au">
          <button class="btn btn_download">Sign up</button>
        </a>
        <a id="btn_Download" href="/start" class="au">
        <button class="btn btn_download">Start</button>
      </a>
        </div>
      
      </div>
    </div>
  </nav>
      
         <div className="navbar_mobile  ">
    <ul className="items">
        <a href="/feed"  className="au  " >
        <li style={{fontSize:"26px"}}><FontAwesomeIcon id='house' icon={faHome} /></li>
        </a>
        <li style={{fontSize:"26px"}}>
        <a href="/chat" id="chat" className="au"><FontAwesomeIcon icon={faMessage} /></a>
        </li>

    </ul>
    <a href="/upload">
        <button className="btn_createPost" style={{fontSize:"1.2rem"}}>
        Upload
        </button>
    </a>
    <ul className="items">

        <a href="/notifications" id="noti" className="au">
        <li style={{fontSize:"26px"}}>

        <FontAwesomeIcon  icon={faBell} />

        </li>
        </a>
        <a href="/profile" id="profile" className="au">
        <li style={{fontSize:"26px"}}>      <FontAwesomeIcon  icon={faUser} /></li>
        </a>

    </ul>
    </div>
       

        </div>
    )
}

export default Navbar