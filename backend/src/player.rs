use rand::Rng;
use serde::Serialize;



const COLORS: &[&'static str] = &[
    "red",
    "blue",
    "green"
];


#[derive(Debug, Clone, Serialize, PartialEq)]
pub struct Player {
    pub id:    i32,
    pub x:     f32,
    pub y:     f32,
    pub size:  f32,
    pub color: String,
}

impl Player {
    pub fn new(id: i32) -> Self {
        let mut rng = rand::rng();

        Self {
            id,
            x:     rng.random(),
            y:     rng.random(),
            size:  rng.random(),
            color: COLORS[rng.random_range(0..COLORS.len())].to_string(),
        }

    }
}
