Feature: Namespace

  Tenant owner must only have access to his tenant namespace

  Scenario Outline: Succeed in describing a namespace owned by my tenant
    Given a tenantOwner role
    And <user> bind with a tenantOwner role and namespace <namespace>
    When <user> run kubectl describe ns <namespace>
    Then it passes

    Examples:
      | user    | namespace |
      | foo     | acme      |
      | bar     | acme      |
      | foobar  | acme      |

  Scenario Outline: Failed in describing a namespace not owned by my tenant
    Given a tenantOwner role
    Given <user> bind with a tenantOwner role and namespace <namespace>
    When <user> run kubectl describe ns <another_namespace>
    Then it failes

    Examples:
      | user | namespace | another_namespace |
      | foo  | acme      | bar               |
      | bar  | 42        | default           |
