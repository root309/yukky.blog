// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Mutation struct {
}

type Post struct {
	ID        string  `json:"id"`
	Title     string  `json:"title"`
	Summary   *string `json:"summary,omitempty"`
	Content   string  `json:"content"`
	CreatedAt string  `json:"createdAt"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
}

type Query struct {
}