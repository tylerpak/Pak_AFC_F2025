DROP SEQUENCE employees_seq CASCADE;

CREATE SEQUENCE IF NOT EXISTS employees_id_seq;
ALTER TABLE employees
    ALTER COLUMN id SET NOT NULL;
ALTER TABLE employees
    ALTER COLUMN id SET DEFAULT nextval('employees_id_seq');

ALTER SEQUENCE employees_id_seq OWNED BY employees.id;