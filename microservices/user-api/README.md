Rules:

== Backend

mutation name

- pattern:
model*Action

- example:
copingCardUpdate

input name
- pattern:
mutationName*Input

- example:
CopingCardUpdateInput

-------------

Frontend

model:
- pattern:
use*Model

- example:
useAbc

model's mutations

- pattern:
  use*ModelMutations

- example:
  useAbcMutations