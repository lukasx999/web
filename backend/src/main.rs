use rocket::fs::FileServer;
use rocket::futures::{SinkExt, StreamExt};
use serde::Serialize;

#[macro_use] extern crate rocket;

mod player;
use player::{Player, Direction};

mod messages;
use messages::Message;



#[get("/ws")]
fn echo(ws: ws::WebSocket) -> ws::Channel<'static> {

    let player = Player::new();
    let player: String = serde_json::ser::to_string_pretty(&player).unwrap();

    let msg = Message::PlayerUpdate {
        player: Player::new(),
    };
    let msg = serde_json::ser::to_string_pretty(&msg).unwrap();

    ws.channel(move |mut stream| Box::pin(async move {

        stream.send(msg.into()).await.unwrap();

        //stream.send(player.into()).await.unwrap();

        //while let Some(message) = stream.next().await {
        //    stream.send(message?).await;
        //}

        Ok(())
    }))
}



#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", FileServer::from("../frontend/"))
        .mount("/", routes![echo])
}
