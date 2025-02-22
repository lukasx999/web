use serde::Serialize;

use crate::Player;




#[derive(Debug, Clone, Serialize)]
pub enum MessageKind {
    PlayerUpdate = 0,
    PlayerJoin   = 1,
    PlayerLeave  = 2,
}

#[derive(Debug, Clone, Serialize)]
pub struct PlayerUpdate {
    pub player: Player,
}

#[derive(Debug, Clone, Serialize)]
pub struct PlayerLeave {
    pub id: i32,
}

impl PlayerLeave {
    pub fn new(id: i32) -> Self {
        Self { id }
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct PlayerJoin {
    pub player: Player,
}

impl PlayerJoin {
    pub fn new(player: Player) -> Self {
        Self { player }
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct Message<T> {
    pub kind: MessageKind,
    pub body: T,
}

impl<T> Message<T> {
    pub fn new(kind: MessageKind, body: T) -> Self {
        Self { kind, body }
    }
}
