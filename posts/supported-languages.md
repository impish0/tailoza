---
title: Supported Code Languages
date: 2026-01-01
categories: reference, code
---

This post showcases all the programming languages supported by the syntax highlighter on this blog. Use these language identifiers in your markdown code blocks.

## Web Technologies

### HTML (markup)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Welcome</h1>
    <p class="intro">This is a paragraph.</p>
</body>
</html>
```

### CSS

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    padding: 2rem;
}
```

### JavaScript

```javascript
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

greet('World');
```

### TypeScript

```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

function getUser(id: number): Promise<User> {
    return fetch(`/api/users/${id}`)
        .then(res => res.json());
}
```

### JSX (React)

```jsx
function Button({ onClick, children }) {
    return (
        <button 
            className="btn btn-primary"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default function App() {
    return <Button onClick={() => alert('Clicked!')}>Click Me</Button>;
}
```

### TSX (React + TypeScript)

```tsx
interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary' }) => {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};
```

## Systems Programming

### C

```c
#include <stdio.h>

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int sum = 0;
    
    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }
    
    printf("Sum: %d\n", sum);
    return 0;
}
```

### C++

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums = {5, 2, 8, 1, 9};
    
    std::sort(nums.begin(), nums.end());
    
    for (const auto& n : nums) {
        std::cout << n << " ";
    }
    
    return 0;
}
```

### Rust (clike)

```clike
fn main() {
    let mut vec = vec![1, 2, 3, 4, 5];
    
    vec.iter()
        .filter(|x| *x % 2 == 0)
        .for_each(|x| println!("{}", x));
}
```

### Go

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

### Zig

```zig
const std = @import("std");

pub fn main() void {
    const stdout = std.io.getStdOut().writer();
    stdout.print("Hello, {s}!\n", .{"World"}) catch {};
}
```

### Swift

```swift
struct Person {
    let name: String
    let age: Int
    
    func greet() -> String {
        return "Hello, I'm \(name) and I'm \(age) years old."
    }
}

let person = Person(name: "Alice", age: 30)
print(person.greet())
```

## JVM Languages

### Java

```java
public class HelloWorld {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        names.stream()
             .filter(name -> name.startsWith("A"))
             .forEach(System.out::println);
    }
}
```

### Kotlin

```kotlin
data class User(val name: String, val email: String)

fun main() {
    val users = listOf(
        User("Alice", "alice@example.com"),
        User("Bob", "bob@example.com")
    )
    
    users.filter { it.name.startsWith("A") }
         .forEach { println(it) }
}
```

## Scripting Languages

### Python

```python
from dataclasses import dataclass
from typing import List

@dataclass
class Task:
    title: str
    completed: bool = False

def get_pending_tasks(tasks: List[Task]) -> List[Task]:
    return [task for task in tasks if not task.completed]

tasks = [Task("Write docs"), Task("Fix bug", True), Task("Review PR")]
pending = get_pending_tasks(tasks)
print(f"Pending: {len(pending)} tasks")
```

### Bash

```bash
#!/bin/bash

# Deploy script
set -e

echo "Starting deployment..."

for service in api web worker; do
    echo "Deploying $service..."
    docker build -t myapp/$service:latest ./$service
    docker push myapp/$service:latest
done

echo "Deployment complete!"
```

### PowerShell

```powershell
# Get all running processes using more than 100MB memory
Get-Process | 
    Where-Object { $_.WorkingSet64 -gt 100MB } |
    Sort-Object WorkingSet64 -Descending |
    Select-Object Name, @{N='Memory (MB)';E={[math]::Round($_.WorkingSet64/1MB,2)}} |
    Format-Table -AutoSize
```

### Lua

```lua
local function fibonacci(n)
    if n <= 1 then
        return n
    end
    return fibonacci(n - 1) + fibonacci(n - 2)
end

for i = 0, 10 do
    print(string.format("fib(%d) = %d", i, fibonacci(i)))
end
```

## Functional Languages

### Haskell

```haskell
quicksort :: Ord a => [a] -> [a]
quicksort [] = []
quicksort (x:xs) = 
    quicksort [y | y <- xs, y <= x] 
    ++ [x] 
    ++ quicksort [y | y <- xs, y > x]

main :: IO ()
main = print $ quicksort [3, 1, 4, 1, 5, 9, 2, 6]
```

### Elixir

```elixir
defmodule Math do
  def factorial(0), do: 1
  def factorial(n) when n > 0 do
    n * factorial(n - 1)
  end
end

1..10
|> Enum.map(&Math.factorial/1)
|> Enum.each(&IO.puts/1)
```

### Erlang

```erlang
-module(hello).
-export([greet/1]).

greet(Name) ->
    io:format("Hello, ~s!~n", [Name]).

start() ->
    greet("World"),
    ok.
```

## Data & Config Languages

### JSON

```json
{
    "name": "my-project",
    "version": "1.0.0",
    "dependencies": {
        "express": "^4.18.0",
        "lodash": "^4.17.21"
    },
    "scripts": {
        "start": "node index.js",
        "test": "jest"
    }
}
```

### YAML

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: postgres:14
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### SQL

```sql
SELECT 
    u.name,
    u.email,
    COUNT(o.id) AS order_count,
    SUM(o.total) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 5
ORDER BY total_spent DESC
LIMIT 10;
```

### PL/SQL

```plsql
CREATE OR REPLACE PROCEDURE update_salary(
    p_employee_id IN NUMBER,
    p_percentage IN NUMBER
) AS
    v_current_salary NUMBER;
BEGIN
    SELECT salary INTO v_current_salary
    FROM employees
    WHERE employee_id = p_employee_id;
    
    UPDATE employees
    SET salary = v_current_salary * (1 + p_percentage / 100)
    WHERE employee_id = p_employee_id;
    
    COMMIT;
END;
```

## DevOps & Infrastructure

### Dockerfile (docker)

```docker
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Nginx

```nginx
server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
    
    location /static/ {
        alias /var/www/static/;
        expires 30d;
    }
}
```

### Apache Config (apacheconf)

```apacheconf
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

### Makefile

```makefile
.PHONY: all build test clean

CC = gcc
CFLAGS = -Wall -Wextra -O2

all: build

build: main.o utils.o
	$(CC) $(CFLAGS) -o app main.o utils.o

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

test:
	./run_tests.sh

clean:
	rm -f *.o app
```

### CMake

```cmake
cmake_minimum_required(VERSION 3.16)
project(MyApp VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(myapp
    src/main.cpp
    src/utils.cpp
)

target_include_directories(myapp PRIVATE include)
target_link_libraries(myapp PRIVATE pthread)
```

### Nix

```nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    yarn
    postgresql
  ];
  
  shellHook = ''
    echo "Development environment loaded!"
    export DATABASE_URL="postgres://localhost/myapp"
  '';
}
```

## Other Languages

### PHP

```php
<?php

class UserController
{
    public function __construct(
        private UserRepository $users
    ) {}
    
    public function show(int $id): JsonResponse
    {
        $user = $this->users->find($id);
        
        if (!$user) {
            return response()->json(['error' => 'Not found'], 404);
        }
        
        return response()->json($user);
    }
}
```

### C# (csharp)

```csharp
using System.Linq;

public record Person(string Name, int Age);

public class Program
{
    public static void Main()
    {
        var people = new List<Person>
        {
            new("Alice", 30),
            new("Bob", 25),
            new("Charlie", 35)
        };
        
        var adults = people.Where(p => p.Age >= 30);
        foreach (var person in adults)
        {
            Console.WriteLine($"{person.Name} is {person.Age}");
        }
    }
}
```

### Django (Template)

```django
{% extends "base.html" %}

{% block content %}
<div class="container">
    <h1>{{ page_title }}</h1>
    
    {% for item in items %}
        <div class="item">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description|truncatewords:30 }}</p>
        </div>
    {% empty %}
        <p>No items found.</p>
    {% endfor %}
</div>
{% endblock %}
```

### Markdown

```markdown
# Heading 1

This is a paragraph with **bold** and *italic* text.

- Item 1
- Item 2
- Item 3

[Link to example](https://example.com)

> This is a blockquote
```

### Diff

```diff
--- a/config.json
+++ b/config.json
@@ -1,5 +1,6 @@
 {
   "name": "my-app",
-  "version": "1.0.0",
+  "version": "1.1.0",
+  "description": "My awesome application",
   "main": "index.js"
 }
```

### Git (commit message format)

```git
commit 8f4e2a1b3c5d7e9f0a2b4c6d8e0f2a4b6c8d0e2f
Author: John Doe <john@example.com>
Date:   Fri Jan 3 10:30:00 2026 -0500

    feat: add user authentication
    
    - Add login/logout endpoints
    - Implement JWT token generation
    - Add password hashing with bcrypt
    
    Closes #42
```

### Log

```log
2026-01-03 10:30:15.123 INFO  [main] Application starting...
2026-01-03 10:30:15.456 INFO  [main] Connecting to database...
2026-01-03 10:30:16.789 WARN  [pool-1] Connection retry attempt 1
2026-01-03 10:30:17.012 INFO  [pool-1] Database connected successfully
2026-01-03 10:30:17.345 ERROR [http-8080] Failed to process request: NullPointerException
2026-01-03 10:30:18.678 INFO  [main] Server listening on port 8080
```

### Vim Script (vim)

```vim
" Set basic options
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab

" Key mappings
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>

" Function to toggle line numbers
function! ToggleNumbers()
    set number!
    set relativenumber!
endfunction

command! Numbers call ToggleNumbers()
```

---

## Usage

To use any of these languages in your blog posts, wrap your code in triple backticks followed by the language identifier:

````markdown
```python
print("Hello, World!")
```
````

The language identifier should match one of the names shown in the headers above (in parentheses where applicable).
