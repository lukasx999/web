use serde::Serialize;

use crate::{Player, Direction};




#[derive(Debug, Clone, Serialize)]
pub enum Message {
    PlayerUpdate {
        player: Player,
    },
}
