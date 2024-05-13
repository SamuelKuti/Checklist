USE checklist;

DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS tasks;


CREATE TABLE IF NOT EXISTS projects (
	project_id INT AUTO_INCREMENT,
    project_name VARCHAR(40) NOT NULL,
    completion FLOAT DEFAULT(0),
	PRIMARY KEY (project_id)
);

CREATE TABLE IF NOT EXISTS tasks (
	task_id INT AUTO_INCREMENT,
    project_id INT NOT NULL,
    task_name VARCHAR(200) NOT NULL,
    complete BOOL DEFAULT(false),
    PRIMARY KEY (task_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
);