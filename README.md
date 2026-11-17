# 🍔 Mini Food Delivery Web Application Using Core Java

A lightweight web-based food delivery application developed using **Core Java**. This project demonstrates Object-Oriented Programming (OOP) concepts, client-server communication, REST API handling, user authentication, query parameter parsing, and dynamic order calculation using Java's built-in `HttpServer`.

The application provides a basic backend structure for a food ordering system without depending on external frameworks such as Spring Boot.

---

## 📌 Project Overview

The Mini Food Delivery Web Application is developed as part of the **Object Oriented Programming (ELC434 P)** laboratory project.

The main objective is to understand how Java can be used to develop a simple backend web application by implementing OOP principles and handling HTTP requests and responses.

### 🎯 Objectives

- Implement Object-Oriented Programming concepts using Core Java.
- Develop REST APIs using Java's built-in `HttpServer`.
- Implement basic user authentication.
- Parse HTTP query parameters using Java Collections.
- Generate JSON responses for client requests.
- Calculate food order totals dynamically.
- Understand client-server architecture and backend communication.

---

## ✨ Features

- **User Authentication:** Validates usernames and passwords.
- **Customer Management:** Organizes customer-related information.
- **Food Item Management:** Represents food items and their details.
- **Order Processing:** Handles food orders and associated items.
- **Dynamic Bill Calculation:** Calculates the total order amount.
- **REST API Handling:** Processes HTTP requests using Java `HttpServer`.
- **Query Parameter Parsing:** Extracts request parameters using Java `Map` and string operations.
- **JSON Responses:** Sends responses in JSON format.
- **Core Java Implementation:** Uses built-in Java functionality without external web frameworks.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Core Java | Application development |
| Object-Oriented Programming | Code organization and design |
| Java HttpServer | HTTP server implementation |
| Java Collections | Data handling and query parsing |
| JSON | Server response format |
| HTTP | Client-server communication |
| VS Code | Development environment |
| Git & GitHub | Version control and project hosting |

---

## 🏗️ System Architecture

The application follows a **Client-Server Architecture**.

### Architecture Workflow

```text
        +----------------------+
        |        Client        |
        |   HTTP Request       |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |      WebServer       |
        |    Java HttpServer   |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |   Query Parameter    |
        |       Parsing        |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |   Authentication &   |
        |   Business Logic     |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |   Order Processing   |
        |   Total Calculation  |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |    JSON Response     |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |       Client         |
        |   Receives Response  |
        +----------------------+
```

### Working Principle

1. The client sends an HTTP request to the Java web server.
2. The server receives and processes the incoming request.
3. Query parameters are extracted and parsed.
4. Authentication and application business logic are executed.
5. Order details are processed.
6. The total order amount is calculated dynamically.
7. The server generates a JSON response.
8. The response is sent back to the client.

---

## 🧠 Object-Oriented Programming Concepts

The project demonstrates the following OOP concepts:

| OOP Concept | Implementation |
|---|---|
| Inheritance | `Customer` extends `User` |
| Encapsulation | Private variables in the `Driver` class |
| Composition | An `Order` contains `Items` |
| Collections | `ArrayList` for managing collections of objects |

These concepts help improve code reusability, organization, maintainability, and modularity.

---

## 📂 Project Structure

The following structure represents the main Java modules described in the project report.

```text
Mini-Food-Delivery-Web-App/
│
├── README.md
│
├── src/
│   ├── User.java
│   ├── Customer.java
│   ├── Item.java
│   ├── Driver.java
│   ├── Order.java
│   └── WebServer.java
│
├── docs/
│   └── OOPS_Project_Report.pdf
│
└── .gitignore
```

*Note: Organize your actual Java files according to this structure. Adjust the folder paths if your source code uses a different arrangement.*

---

## 💻 Modules Developed

| File | Description |
|---|---|
| `User.java` | Represents the user information and related functionality. |
| `Customer.java` | Represents customer details and extends the User class. |
| `Item.java` | Represents food items used in the ordering system. |
| `Driver.java` | Contains driver-related information and encapsulated data. |
| `Order.java` | Handles order-related information and associated items. |
| `WebServer.java` | Implements the HTTP server and request-response handling. |

---

## ⚙️ Implementation Details

### 1. Login Validation

The application validates the username and password by comparing the supplied credentials with the stored credentials.

```java
public boolean validateLogin(String u, String p) {
    return username.equals(u) && password.equals(p);
}
```

### 2. Query Parameter Parsing

HTTP query parameters are separated using string operations.

```java
String[] pairs = query.split("&");
String[] keyValue = pair.split("=");
```

### 3. JSON Response

The HTTP response content type is configured as JSON.

```java
exchange.getResponseHeaders()
        .set("Content-Type", "application/json");
```

### 4. Order Calculation

The total order amount is calculated by adding the prices of all selected items.

\[
Total = \sum_{i=1}^{n} Price_i
\]

---

## 🚀 Getting Started

### Prerequisites

Before running the project, install:

- Java Development Kit (JDK)
- Visual Studio Code
- Java Extension Pack for VS Code (recommended)

### Installation

**Step 1: Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/Mini-Food-Delivery-Web-App.git
```

**Step 2: Navigate to the project directory**

```bash
cd Mini-Food-Delivery-Web-App
```

**Step 3: Compile the Java files**

If your Java source files are all in the same directory and do not declare a package, use:

```bash
javac --add-modules jdk.httpserver src/*.java
```

**Step 4: Run the web server**

If `WebServer.java` contains the main method and uses the default package:

```bash
java --add-modules jdk.httpserver -cp src WebServer
```

*Note: These commands assume the project uses the default package and that `WebServer.java` contains the server's main method. Update the commands if your actual source code has a different package structure or entry point.*

---

## 📊 Results

The project was tested using the following test cases:

| Test Case | Expected Result |
|---|---|
| Valid Login | Success |
| Invalid Login | Failure |
| Order Placement | Total Amount Generated |

### Observed Outcomes

The implemented system successfully demonstrates:

- User authentication.
- Query parameter parsing.
- Dynamic order total calculation.
- JSON response generation.
- HTTP client-server communication.

---

## 🔮 Future Enhancements

The application can be extended with the following features:

- Database integration using MySQL.
- Improved user registration and login.
- Password encryption and secure authentication.
- Food menu with categories and images.
- Shopping cart functionality.
- Online payment gateway integration.
- Order tracking functionality.
- Admin dashboard for managing food items and orders.
- Frontend integration using HTML, CSS, and JavaScript.
- Deployment on a cloud platform.

---
📬 Contact

Developer: Srishti S Rao

Degree: B.Tech – Electronics and Computer Science Engineering (AI/ML Specialization)

Institution: Christ University (Deemed to be University)

Location: Bengaluru, India

Email: srishtisrao26@gmail.com

LinkedIn: https://www.linkedin.com/in/srishti-s-rao-b09189316

GitHub: https://github.com/srishtii26
---

## 📚 References

1. Oracle Java Documentation.
2. Java Collections Framework Guide.
3. REST API Design Principles.
4. Java `HttpServer` Documentation (`com.sun.net.httpserver`).

---

## ⭐ Acknowledgement

This project was developed as part of the Object Oriented Programming laboratory course. It provided practical experience in Core Java, OOP principles, HTTP server implementation, REST API handling, and backend application development.

**If you find this project useful, consider giving this repository a ⭐!**
