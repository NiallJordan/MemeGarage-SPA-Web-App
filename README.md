# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Niall Jordan

## Overview.
The MemeGarage Web App written in JS.

. . . . . List of user features  . . . .

- View "hot", "trending" and "new" posts from the MemeGarage App.
- Create Posts using the Post Form component.
- Create and view post comments on the comment page.
- Uses Stub API to store posts.

## Setup.

1. npx create-react-app webdev-assgn
2. cd webdev-assgn
3. npm install
4. npx storybook

## Data Model Design.

![][model]

## UI Design.

![][main]

>> Shows a post list. The post list can be filtered using the buttons on the left of the page.

![][detail]

>> Shows a post for each post in the jsonstore(not fully implemented). The post can be upvoted, down voted, edited and deleted. Any user can edit the title of the post. The comment page can be accessed through the comment link at the bottom of each post.

![][comment]

>> Shows the comment page. The user and the points of the comment can also be seen.

![][login]

>>Shows the login page for an authenticated user.


## Routing.
![][routes]

- / (public)- displays all main page with all published posts
- /hot (public) - displays all published posts sorted by number of points (likes)
+ /posts/:post_id (public) - displays a the comment page of the posts.
- /login (public) - displays the login page form for authentication.

## Storybook.

![][stories]

## Backend (Optional).

Attempt to implement json store. Could not get it to work so instead opted for StubAPI.

## Authentication (Optional).

Attempt to create login/authentication system. Did not have enough time to complete.

[model]: ./img/model.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
[comment]: ./img/comment.png
[login]: ./img/login.png
[routes]: ./img/routes.png