Feature: Triangle Validator
  As a user
  I want to validate triangle properties
  So that I can determine if sides can form a triangle and its type

  Scenario Outline: Checking if three sides can form a valid triangle
    Given I have sides <a>, <b>, and <c>
    When I check if it forms a valid triangle
    Then the result should be <result>

    Examples:
      | a | b | c | result  |
      | 3 | 4 | 5 | true    |
      | 1 | 1 | 3 | false   |
      | 2 | 2 | 2 | true    |
      | 0 | 1 | 2 | false   |
      | -1| 2 | 2 | false   |

  Scenario Outline: Determining triangle type
    Given I have sides <a>, <b>, and <c>
    When I check the triangle type
    Then the type should be "<type>"

    Examples:
      | a | b | c | type           |
      | 2 | 2 | 2 | Gleichseitig   |
      | 2 | 2 | 3 | Gleichschenklig|
      | 3 | 4 | 5 | Ungleichseitig |
      | 1 | 1 | 3 | Invalid        |
