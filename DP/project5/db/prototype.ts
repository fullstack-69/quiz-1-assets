import { eq, and } from "drizzle-orm";
import { dbClient, dbConn } from "@db/client.js";
import { users, posts, comments } from "@db/schema.js";

interface UserData {
  name: string;
  email: string;
  isActive: boolean;
}

interface PostData {
  content: string;
  authorId: number;
}

interface CommentData {
  content: string;
  postId: string;
  authorId: number;
}

async function addUser(user: UserData) {
  await dbClient.insert(users).values({
    name: user.name,
    email: user.email,
    isActive: false
  });
  dbConn.end();
}

async function addPost(post: PostData) {
  await dbClient.insert(posts).values({
    content: `Post - ${post.content}`,
    authorId: post.authorId
  });
  dbConn.end();
}

async function addComment(comment: CommentData) {
  await dbClient.insert(comments).values({
    content: `Comment - ${comment.content}`,
    postId: comment.postId,
    authorId: comment.authorId
  });
  dbConn.end();
}

async function getUser1() {
  const results = await dbClient.query.users.findMany();
  console.log(results);
  dbConn.end();
}

async function getUser2() {
  const results = await dbClient.query.users.findMany({
    with: {
      posts: {
        with: {
          comments: true,
        },
      },
    },
  }
  );
  console.log(results);
  dbConn.end();
}

async function updatePost(post: PostData, postId: string) {
  await dbClient
    .update(posts)
    .set({
      content: post.content,
    })
    .where(
      and(
        eq(posts.postId, post.postId)),
        eq(posts.authorId, post.authorId)
    );
  dbConn.end();
}


