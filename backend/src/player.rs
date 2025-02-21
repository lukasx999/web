use rand::Rng;
use serde::Serialize;


#[derive(Debug, Clone, Copy, Serialize)]
pub enum Direction {
    Left,
    Right,
    Up,
    Down,
}


const COLORS: &[&'static str] = &[
    "red",
    "blue",
    "green"
];


#[derive(Debug, Clone, Serialize)]
pub struct Player {
    pub x:     f32,
    pub y:     f32,
    pub size:  f32,
    pub color: String,
}

impl Player {
    pub fn new() -> Self {
        let mut rng = rand::rng();

        Self {
            x:     rng.random(),
            y:     rng.random(),
            size:  rng.random(),
            color: COLORS[rng.random_range(0..COLORS.len())].to_string(),
        }

    }
}
